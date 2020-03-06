import mongoose from "mongoose"
import session from "express-session"
import connectMongo from "connect-mongo"
const MongoStore = connectMongo(session)

export default function buildMakeSessionStore() {
  return function makeSessionStore() {
    if (mongoose.connection.readyState === 0) {
      const connectionOpts = {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
      mongoose.createConnection(process.env.DBURL, connectionOpts) 
    }

    return new MongoStore({ mongooseConnection: mongoose.connection })
  }

}
