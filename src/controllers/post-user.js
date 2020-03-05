export default function makePostUser ({signUpUser}) {
  return async function postUser(httpRequest) {
    try {
      const { source = {}, ...userInfo } = httpRequest
      source.ip = httpRequest.ip
      source.browser = httpRequest.headers['User-Agent']
      if (httpRequest.headers['Referer']) {
        source.referrer = httpRequest.headers['Referer']
      }

      const signUpQuery = await signUpUser({...userInfo.body})

      if (signUpQuery.conflict) {
        return { 
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 409,
          body: signUpQuery
        }
      }

      return {
        headers: {
          'Content-Type': 'application/json',
          'Last-Modified': new Date(signUpQuery.modifiedOn).toUTCString()
        },
        statusCode: 201,
        body: signUpQuery
      }

    } catch (err) {
      console.error("[Controller] Error on user signup", err)

      return {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 400,
        body: {
          error: err.message
        }
      }
    } 
  }
}
