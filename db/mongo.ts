import * as mongoose from 'mongoose'
import * as logger   from '../utility/logger'

import {
  event,
  speaker,
  session } from './models'

const user = process.env.MONGO_USERNAME
const password = process.env.MONGO_PASSWORD
const database = process.env.MONGO_DB

const mongodbUri = `mongodb://${user}:${password}@${database}`

mongoose.Promise = global.Promise
mongoose.connect(mongodbUri, {
  useMongoClient: true
})

const db = mongoose.connection
db.on('error', () => logger.error(`mongo connection couldn't be established`))
db.once('open', () => logger.debug(`mongo connection established`))
db.on('close', () => {
  logger.debug('mongo connection closed')
  process.exit(0)
})

export {event as Events}
export {session as Sessions}
export {speaker as Speakers}

// export = {
//     Events: event,
//     Sessions: session,
//     Speakers: speaker
// }
