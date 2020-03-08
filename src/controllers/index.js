import { 
  signupProvider, 
  loginProvider, 
  loggedInProvider, 
  logoutProvider 
} from '../auth-provider'
import notFound from './not-found'
import makeSignupCont from './post-user'
import makeLoginCont from './login'
import makeLoggedInCont from './login-check'
import makeLogoutCont from './logout'

const signupCont = makeSignupCont({ signupProvider })
const loginCont = makeLoginCont({ loginProvider })
const loggedInCont = makeLoggedInCont({ loggedInProvider })
const logoutCont = makeLogoutCont({ logoutProvider })

export { 
  notFound, 
  signupCont, 
  loginCont, 
  loggedInCont, 
  logoutCont 
}
