import { signUpUser } from '../auth-provider'
import notFound from './not-found'
import makePostUser from './post-user'

const postUser = makePostUser({ signUpUser })

export { notFound, postUser }
