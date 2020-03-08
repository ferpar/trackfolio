export default function makeLoggedInProvider({passport}){
  return async function loggedInProvider(req) {
    if(req.isAuthenticated()){
      const secureUser = req.user._doc
      if (secureUser.password) delete secureUser.password
      return secureUser
    } else {
      return { message: 'Authentication required' }
    }
  } 
}
