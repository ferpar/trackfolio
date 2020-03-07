import bcrypt from "bcrypt";
import passport from "passport";
import passportLocal from "passport-local";
const LocalStrategy = passportLocal.Strategy;
import { usersDb } from "../data-storage";

import makeSessionSetup from "./session-setup";
import makePassportSetup from "./passport-setup";
import makeSignupProvider from "./signup-user";
import makeLoginProvider from './login.js';

const sessionSetup = makeSessionSetup();
const authSetup = makePassportSetup({
  usersDb,
  sessionSetup,
  passport,
  LocalStrategy,
  bcrypt
});

const signupProvider = makeSignupProvider({ usersDb, encryptPassword });
const loginProvider = makeLoginProvider({ passport })

export { authSetup, signupProvider, loginProvider };


function encryptPassword(password) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashPass = bcrypt.hashSync(password, salt);
  return hashPass;
}
