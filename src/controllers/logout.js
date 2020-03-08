export default function makeLogoutCont ({logoutProvider}) {
  return async function logoutCont(httpRequest){
    const logoutQuery = logoutProvider(httpRequest)

    const { success, message } = logoutQuery;

    return {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: success ? 200 : 401,
      body: { message }
    }

  }
}
