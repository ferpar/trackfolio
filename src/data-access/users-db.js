import Id from '../Id'
import User from './User.js'

export default function makeUsersDb() {
  return Object.freeze({
    findByHash,
    findById,
    findBy_Id,
    findByUsername,
    insert
  })
  async function findByHash({ hash }) {
    const foundUser = await User.findOne({ hash })
    .catch(err => { console.error("[Data-Accessor] error retrieving User by hash", err)})
    return foundUser
  }
  async function findById({ id }) {
    const foundUser = await User.findOne({id})
    .catch(err => {console.error("[Data-Accessor] error retrievind User by id", err)})
    return foundUser
  }
  async function findBy_Id({ _id }) {
    const foundUser = await User.findById(_id)
    .catch(err => {console.error("[Data-Accessor] error retrieving User by _id", err)})
    return foundUser
  }
  async function findByUsername({ username }) {
    const foundUser = await User.findOne({username})
    .catch(err => { console.error("[Data-Accessor] error retrieving User by username", err)})
    return foundUser
  }
  async function insert ({ id, ...commentInfo }) {
    const createdUser = await User.create({ id, ...commentInfo})
    .catch(err => { console.error("[Data-Accessor] error saving user to DB", err)})
    return createdUser
  }
}
