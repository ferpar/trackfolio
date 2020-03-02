export default function buildMakeUser ({ Id, md5 }) {
  return function makeUser ({
    createdOn = Date.now(),
    id,
    modifiedOn = Date.now(),
    password,
    username
  } = {}) {
    return Object.freeze({
      getCreatedOn: () => createdOn,
      getId: () => id,
      getModifiedOn: () => modifiedOn,
      getPassword: () => password,
      getUsername: () => username
    })
    
    function makeHash () {
      return md5(username + createOn)
    }
  }
}
