import makeUser from '../entities/user'
export default function makeSignupUser ({ usersDb, encryptPassword }) {
  return async function signupUser(userInfo) {

    const exists = await usersDb.findByUsername(userInfo)
    if (exists) { 
      return { conflict: "Username already taken. Choose another one."}
    }

    const hashedPassword = encryptPassword(userInfo.password)
    const updatedUserInfo = { ...userInfo, password: hashedPassword }

    const user = makeUser(updatedUserInfo)

    const storedUser = await usersDb.insert({
      createdOn: user.getCreatedOn(),
      hash: user.getHash(),
      id: user.getId(),
      modifiedOn: user.getModifiedOn(),
      password: user.getPassword(),
      username: user.getUsername()
    })

    delete storedUser._doc.password

    return storedUser._doc
  }
}
