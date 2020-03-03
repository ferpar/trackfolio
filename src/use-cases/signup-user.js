import makeUser from '../entities/user'
export default function makeSignupUser ({ usersDb }) {
  return async function signupUser(userInfo) {
    console.log("signUpUser usecase")
    console.log(userInfo)
    const exists = await usersDb.findByUsername(userInfo)
    if (exists) { 
      return exists 
    }
    console.log("gets this far")
    const user = makeUser(userInfo)
      .catch(err => console.error("error creating user entity", err))
    return await usersDb.insert({
      createdOn: user.getCreatedOn(),
      id: user.getId(),
      modifiedOn: user.getModifiedOn(),
      password: user.getPassword(),
      username: user.getUsername()
    })
  }
}
