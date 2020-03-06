import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config()

const Schema = mongoose.Schema;

const connectionOpts = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

let connection = mongoose.createConnection(process.env.DBURL, connectionOpts)

const userSchema = Schema({
  createdOn: Number,
  hash: String,
  id: String,
  modifiedOn: Number,
  password: String,
  username: String
});

const User = connection.model("User", userSchema)

export default User
