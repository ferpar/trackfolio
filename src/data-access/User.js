import mongoose from "mongoose";
const Schema = mongoose.Schema;

let connection = mongoose.createConnection(process.env.DBURL)

const userSchema = Schema({
  id: String,
  usename: String,
  password: String
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const User = connection.model("User", userSchema)
