export default function makePostUSer ({signUpUser}) {
  return async function postUser(httpRequest) {
    try {
      const { source = {}, ...userInfo } = httpRequest
      source.ip = httpRequest.ip
      source.browser = httpRequest.headers['User-Agent']
      if (httpRequest.headers['Referer']) {
        source.referrer = httpRequest.headers['Referer']
      }

      const posted = await signUpUser({...userInfo.body})

      return {
        headers: {
          'Content-Type': 'application/json',
          'Last-Modified': new Date(posted.modifiedOn).toUTCString()
        },
        statusCode: 201,
        body: { ...posted._doc }
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
