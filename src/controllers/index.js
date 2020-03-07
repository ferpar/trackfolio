import { signupProvider, loginProvider } from '../auth-provider'
import notFound from './not-found'
import makeSignupCont from './post-user'
import makeLoginCont from './login.js'

const signupCont = makeSignupCont({ signupProvider })
const loginCont = makeLoginCont({ loginProvider })

export { notFound, signupCont, loginCont }
