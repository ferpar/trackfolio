import Id from '../Id'
import User from './User'

export default function makeUsersDb() {
  return Object.freeze({
    insert
  })
  async function insert ({ id: _id, ...commentInfo }) {
    User.save({ _id, ...commentInfo})
    return { id, ...commentInfo}
  }
}
