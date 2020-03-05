import { signUpUser } from '../use-cases'
import notFound from './not-found'
import makePostUser from './post-user'

const postUser = makePostUser({ signUpUser })

export { notFound, postUser }
