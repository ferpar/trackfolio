import makeUser from '../entities/user'
export default function makeSignupUser ({ usersDb }) {
  return async function signupUser(userInfo) {
    const exists = await usersDb.findByUsername(userInfo)
    if (exists) { 
      return exists 
    }
    //TODO bring passwordEncryption from the entity
    const user = makeUser(userInfo)
    return await usersDb.insert({
      createdOn: user.getCreatedOn(),
      id: user.getId(),
      modifiedOn: user.getModifiedOn(),
      password: user.getPassword(),
      username: user.getUsername()
    })
  }
}
