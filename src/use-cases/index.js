import bcrypt from 'bcrypt'
import makeSignupUser from './signup-user'
import { usersDb } from '../data-access'

const signUpUser = makeSignupUser({ usersDb, encryptPassword })

export { signUpUser }

function encryptPassword (password) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashPass = bcrypt.hashSync(password, salt);
  return hashPass
}
