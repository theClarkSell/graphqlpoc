import * as mongoose from 'mongoose'
const Schema   = mongoose.Schema

const speakerSchema = new Schema({

  firstName: {
    type: String,
    unique: false,
    required: true
  },

  lastName: {
    type: String,
    unique: false,
    required: true
  },

  email: {
    type: String,
    unique: false,
    required: true
  },

  webSite: {
    type: String,
    unique: false,
    required: false
  },

  sessions: [{
    type: Schema.Types.ObjectId,
    ref: 'Session'
  }]

})

module.exports = mongoose.model('Speaker', speakerSchema)
