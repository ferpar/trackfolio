import bcrypt from "bcrypt"
import passport from 'passport'
import passportLocal from 'passport-local'
const LocalStrategy = passportLocal.Strategy
import { usersDb } from '../data-access'

import makeSessionSetup from './session-setup'
import makePassportSetup from './passport-setup'
import makeSignupUser from './signup-user'

const sessionSetup = makeSessionSetup()
const authSetup = makePassportSetup({ usersDb, sessionSetup, passport, LocalStrategy, bcrypt}) 

const signUpUser = makeSignupUser({ usersDb, encryptPassword })

export { authSetup, signUpUser }

function encryptPassword (password) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashPass = bcrypt.hashSync(password, salt);
  return hashPass
}
