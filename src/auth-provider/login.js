import makeUser from '../entities/user'
export default function makeLoginProvider ({passport}) {
  return async function loginProvider (req) {
    let returnValue;
    await passport.authenticate(
      'user-local',
      async (err, foundUser, failureDetails) => {
        if (err) {
          console.error("[AuthProvider] error on passport authentication process ", err)
          returnValue = {
            error: "error on authentication process"
          }
        } else if (!foundUser) {
          returnValue = failureDetails //object with a message key (passport strategy's 3rd argument of "done")
        } else {
          req.login( foundUser, err => {
            if (err) {
              console.error("[AuthProvider] Error on passport signup process", err)
              returnValue = { error: "error on signup process" }
            } else {
              const secureUser = foundUser
              if (secureUser.password) delete secureUser.password
              returnValue = secureUser
            }
          })
        }
      }
    )(req)
    return returnValue
  }
}
