import mongoose from "mongoose"
import session from "express-session"
import connectMongo from "connect-mongo"
const MongoStore = connectMongo(session)

export default function buildMakeSessionStore() {
  return function makeSessionStore() {
    return new MongoStore({ mongooseConnection: mongoose.connection })
  }

}
