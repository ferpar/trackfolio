export default function makeLogoutProvider({passport}){
  return async function logoutProvider(req){
    if(req.isAuthenticated()){
      req.logout()
      return { 
        message: "Succesfully logged out",
        success: true
      }
    } else {
      return { 
        message: "Already logged out",
        success: false
      }
    }
  }
}
