import makeUser from '../entities/user'
export default function makeSignupUser ({ usersDb, encryptPassword }) {
  return async function signupUser(userInfo) {
    const exists = await usersDb.findByUsername(userInfo)
    if (exists) { 
      return exists 
    }

    const hashedPassword = encryptPassword(userInfo.password)

    const updatedUserInfo = { ...userInfo, password: hashedPassword }

    const user = makeUser(updatedUserInfo)
    return await usersDb.insert({
      createdOn: user.getCreatedOn(),
      hash: user.getHash(),
      id: user.getId(),
      modifiedOn: user.getModifiedOn(),
      password: user.getPassword(),
      username: user.getUsername()
    })
  }
}
