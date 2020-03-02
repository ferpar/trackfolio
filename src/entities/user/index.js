import bcrypt from 'bcrypt'
import crypto from "crypto"
import Id from "../../Id"
import buildMakeUser from "./user"

const makeUser = buildMakeUser({ Id, md5, encryptPassword })

export default makeUser

function md5 (text) {
  return crypto
    .createHash('md5')
    .update(text, 'utf-8')
    .digest('hex')
}

function encryptPassword (password) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashPass = bcrypt.hashSync(password, salt);
  return hashPass
}
