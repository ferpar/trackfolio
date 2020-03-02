import mongoose from "mongoose";
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
