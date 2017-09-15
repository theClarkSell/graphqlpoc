
const logger = require('../utility/logger')

module.exports = {

  Queries: {
    events: async (root, args, {mongo: {Events}}) => {
      logger.debug(`in event query`)
      return await Events.find().then(r => r)
    }
  },

  Mutations: {
  },

  Event: {
    id: root => root._id || root.id,
    sessions: async ({_id, sessions}, args, {mongo: {Sessions}}) => {
      return await Sessions.find({_id: {$in: sessions} }).then( r => r)
    },
    speakers: async ({_id, speakers}, args, {mongo: {Speakers}}) => {
      return await Speakers.find({_id: {$in: speakers} }).then( r => r)
    }
  }
}
