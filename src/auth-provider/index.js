import bcrypt from "bcrypt"
import passport from 'passport'
import passportLocal from 'passport-local'
const LocalStrategy = passportLocal.Strategy
import { usersDb } from '../data-access'

import makeSessionSetup from './session-setup'
import makePassportSetup from './pasport-setup'

const sessionSetup = makeSessionSetup()
const authSetup = makePassportSetup({ usersDb, sessionSetup, passport, LocalStrategy, bcrypt}) 

export { authSetup }
