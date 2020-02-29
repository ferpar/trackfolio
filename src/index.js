import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(bodyParser.json())

app.listen(process.env.PORT, () => {
  console.log("Server is listening on port " + process.env.PORT)
})
