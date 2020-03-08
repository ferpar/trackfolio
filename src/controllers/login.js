export default function makeLoginCont ({loginProvider}) {
  return async function loginCont(httpRequest) {
    try {
      console.log(httpRequest.session)
      const loginQuery = await loginProvider(httpRequest) 
      const { message = undefined, error = undefined} = loginQuery

      if (message || error) {
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: message ? 401 : 500,
          body: {
            message: message ? message : error
          }
        }
      }

      return {
        headers:{
          'Content-Type': 'application/json',
          'Last-Modified': new Date(loginQuery.modifiedOn).toUTCString()
        },
        statusCode: 200,
        body: { ...loginQuery }
      }

    } catch (err) {
      console.error("[Controller] Error on user login", err) 

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
