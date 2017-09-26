import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

const eventSchema = new Schema({

  name: {
    type: String,
    unique: false,
    required: true
  },

  description: {
    type: String,
    unique: false,
    required: true
  },

  year: {
    type: Number,
    unique: false,
    required: true
  },

  speakers: [{
    type: Schema.Types.ObjectId,
    ref: 'Speaker'
  }],

  sessions: [{
    type: Schema.Types.ObjectId,
    ref: 'Session'
  }]
})

module.exports = mongoose.model('Event', eventSchema)
