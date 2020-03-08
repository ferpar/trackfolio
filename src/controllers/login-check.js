export default function makeLoggedInCont ({ loggedInProvider}) {
  return async function loggedInCont(httpRequest) {
    try {
      const loggedInQuery = await loggedInProvider(httpRequest)
      const { message = undefined } = loggedInQuery

      if( message ) {
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 401,
          body: { message }
        }
      }

      return {
        headers:{
          'Content-Type': 'application/json',
          'Last-Modified': new Date(loggedInQuery.modifiedOn).toUTCString()
        },
        statusCode: 200,
        body: loggedInQuery
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
