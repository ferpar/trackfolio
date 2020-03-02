import makeUser from '../entities/user'
export default function makeSignupUser ({}) {
  return async function signupUser(userInfo) {
    const user = makeUser(userInfo)
  }
}
