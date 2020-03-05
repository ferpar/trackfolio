import brcypt from "bcrypt"
import passport from 'passport'
import passportLocal from 'passport-local'
const LocalStrategy = passportLocal.Strategy
import { usersDb } from '../../data-access'

import makePassportSetup from './pasport-setup'

const passportSetup = makePassportSetup({ usersDb, passport, LocalStrategy, bcrypt}) 

export { passportSetup }
