import makeUsersDb from './users-db'
import buildMakeSessionStore from './sessions-db'

const usersDb = makeUsersDb()
const makeSessionStore = buildMakeSessionStore()

export { usersDb, makeSessionStore }
