const mongoose = require('mongoose')
const logger   = require('../utility/logger')

const Event    = require('../events/dbModel')
const Session  = require('../sessions/dbModel')
const Speaker  = require('../speakers/dbModel')

const user = process.env.MONGO_USERNAME
const password = process.env.MONGO_PASSWORD
const database = process.env.MONGO_DB

const mongodbUri = `mongodb://${user}:${password}@${database}`

mongoose.connect(mongodbUri, {
  useMongoClient: true
})

const db = mongoose.connection
db.on('error', () => logger.error(`mongo connection couldn't be established`))
db.once('open', () => logger.debug(`mongo connection established`))

module.exports = {
    Events: Event,
    Sessions: Session,
    Speakers: Speaker
}
