import mongoose from 'mongoose'
import makeUsersDb from './users-db'
import buildMakeSessionStore from './sessions-db'
import makeDbConnector from './dbConnection'

const usersDb = makeUsersDb()
const makeSessionStore = buildMakeSessionStore()
const connectToDb = makeDbConnector({mongoose})

export { usersDb, makeSessionStore, connectToDb }
