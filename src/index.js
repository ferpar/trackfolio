import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { notFound, postUser } from './controllers'
import makeCallback from './express-callback'
import { authSetup } from './auth-provider'

dotenv.config()

const app = express()

app.use(bodyParser.json())

authSetup(app)

const apiRoot = process.env.APIROOT

app.post(`${apiRoot}/user`, makeCallback(postUser))
app.use(makeCallback(notFound))

app.listen(process.env.PORT, () => {
  console.log("Server is listening on port " + process.env.PORT)
})
