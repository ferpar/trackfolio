import bcrypt from 'bcrypt'
import passport from 'passport';
import passportLocal from 'passport-local';
const LocalStrategy = passportLocal.Strategy;
import { usersDb } from '../data-storage';

import makeEncryptPassword from './encription'
import makeSessionSetup from './session-setup';
import makePassportSetup from './passport-setup';
import makeSignupProvider from './signup-user';
import makeLoginProvider from './login.js';
import makeLoggedInProvider from './login-check'
import makeLogoutProvider from './logout'

const sessionSetup = makeSessionSetup();
const authSetup = makePassportSetup({
  usersDb,
  sessionSetup,
  passport,
  LocalStrategy,
  bcrypt
});

const encryptPassword = makeEncryptPassword({bcrypt})
const signupProvider = makeSignupProvider({ usersDb, encryptPassword });
const loginProvider = makeLoginProvider({ passport })
const loggedInProvider = makeLoggedInProvider({ passport })
const logoutProvider = makeLogoutProvider({ passport })

export { 
  authSetup, 
  signupProvider, 
  loginProvider, 
  loggedInProvider, 
  logoutProvider 
};


