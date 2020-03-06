export default function buildMakeUser ({ Id, md5 }) {
  return function makeUser ({
    createdOn = Date.now(),
    id = Id.makeId(),
    modifiedOn = Date.now(),
    password,
    username
  } = {}) {
    if (!Id.isValidId(id)) {
      throw new Error('User must have a valid id')
    }
    if (!username) {
      throw new Error('User must have a username')
    }
    if (username.length < 2) {
      throw new Error('username must be at least 2 characters long')
    }
    if (!password) {
      throw new Error('User must have a password')
    }

    let hash

    return Object.freeze({
      getCreatedOn: () => createdOn,
      getHash: () => hash || (hash = makeHash()),
      getId: () => id,
      getModifiedOn: () => modifiedOn,
      getPassword: () => password,
      getUsername: () => username
    })
    
    function makeHash () {
      return md5(username || '' + createdOn + id)
    }
  }
}
