import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { notFound, postUser } from './controllers'
import makeCallback from './express-callback'
import { authSetup } from './auth-provider'
import { connectToDb } from './data-access'

////import mongoose from 'mongoose'
//import session from 'express-session'
//import connectMongo from 'connect-mongo'
//const MongoStore = connectMongo(session)

dotenv.config()

const server = express()

//mongoose.connect(process.env.DBURL, {useNewUrlParser: true})
//.catch(err => console.error("Error connection to mongo", err))
connectToDb()

server.use(bodyParser.json())

//server.use(
//  session({
//    cookie: {secure: false},
//    secret: "tigersharksecretions",
//    resave: true,
//    saveUninitialized: true,
//    store: new MongoStore({ mongooseConnection: mongoose.connection})
//  })
//)

authSetup(server)

const apiRoot = process.env.APIROOT

server.post(`${apiRoot}/user`, makeCallback(postUser))
server.use(makeCallback(notFound))

server.listen(process.env.PORT, () => {
  console.log("Server is listening on port " + process.env.PORT)
})
