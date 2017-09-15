
const logger = require('../utility/logger')

module.exports = {

  Queries: {
    speakers: async (root, args, {mongo: {Speakers}}) => {
      logger.debug(`in speakers query`)
      return await Speakers.find().then(r => r)
    }
  },

  Mutations: {
    createSpeaker: async (root, {newSpeaker}, {mongo: {Speakers}}) => {
      logger.data(newSpeaker)
      let s = new Speakers(newSpeaker)
      return await s.save().then( r => r )
    }
  },

  Speaker: {
    id: root => root._id || root.id,
    sessions: async ({_id}, args, {mongo: {Sessions}}) => {
      return await Sessions.find({speakers: {$in: [_id]} }).then( r => r)
    }
  }
}
