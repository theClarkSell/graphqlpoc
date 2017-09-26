import * as mongoose from 'mongoose'
import * as logger   from '../utility/logger'

const {
  event,
  speaker,
  session } = require('./models')

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

module.exports = {
    Events: event,
    Sessions: session,
    Speakers: speaker
}
