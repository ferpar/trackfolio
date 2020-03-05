import crypto from "crypto"
import Id from "../../Id"
import buildMakeUser from "./user"

const makeUser = buildMakeUser({ Id, md5 })

export default makeUser

function md5 (text) {
  return crypto
    .createHash('md5')
    .update(text, 'utf-8')
    .digest('hex')
}
