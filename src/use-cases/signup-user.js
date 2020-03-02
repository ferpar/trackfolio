import makeUser from '../entities/user'
export default function makeSignupUser ({ usersDb }) {
  return async function signupUser(userInfo) {
    const exists = usersDb.findByUsername(userInfo.username)
    if (exists) { 
      return exists 
    }
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
