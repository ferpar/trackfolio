import makeSignupUser from './signup-user'
import { usersDb } from '../data-access'

const signUpUser = makeSignupUser({ usersDb })

export { signUpUser }
