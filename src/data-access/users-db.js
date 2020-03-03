import Id from '../Id'
import User from './User.js'

export default function makeUsersDb() {
  return Object.freeze({
    findById,
    findByUsername,
    insert
  })
  async function findById({ id }) {
    const foundUser = await User.findById(id)
    return foundUser
  }
  async function findByUsername({ username }) {
    const foundUser = await User.findOne({username})
    return foundUser
  }
  async function insert ({ id, ...commentInfo }) {
    await User.create({ id, ...commentInfo})
    .catch(err => { console.error("[Data-Accessor] error saving user to DB", err)})
    return { id, ...commentInfo} //TODO return from the DB; check if overriding _id is possible
  }
  //TODO: findByHash
}
