import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { notFound, postUser } from './controllers'
import makeCallback from './express-callback'
import { authSetup } from './auth-provider'

dotenv.config()

const server = express()

server.use(bodyParser.json())

authSetup(server)

const apiRoot = process.env.APIROOT

server.post(`${apiRoot}/user`, makeCallback(postUser))
server.use(makeCallback(notFound))

server.listen(process.env.PORT, () => {
  console.log("Server is listening on port " + process.env.PORT)
})
