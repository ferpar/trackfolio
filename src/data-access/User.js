import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config()

const Schema = mongoose.Schema;

let connection = mongoose.createConnection(process.env.DBURL)

const userSchema = Schema({
  createdOn: Number,
  id: String,
  modifiedOn: Number,
  password: String,
  username: String
});

const User = connection.model("User", userSchema)

export default User
