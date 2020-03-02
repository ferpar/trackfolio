import Id from '../Id'
import User from './User'

export default function makeUsersDb() {
  return Object.freeze({
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
  async function insert ({ id: _id, ...commentInfo }) {
    User.save({ _id, ...commentInfo})
    return { id, ...commentInfo}
  }
  //TODO: findByHash
}
