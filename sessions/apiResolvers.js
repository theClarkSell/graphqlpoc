const logger = require('../utility/logger')

module.exports = {

  Queries: {
    sessions: async (root, args, {mongo: {Sessions}}) => {
      logger.debug(`in sessions query`)
      return await Sessions.find().then(r => r)
    }
  },

  Mutations: {
    createSession: async (root, {newSession}, {mongo: {Sessions}}) => {
      logger.data(newSession)
      let s = new Sessions(newSession)
      return await s.save().then( r => r )
    }
  },

  Session: {
    id: root => root._id || root.id,
    speakers: async ({_id}, args, {mongo: {Speakers}}) => {
      return await Speakers.find({sessions: {$in: [_id]} }).then( r => r)
    }
  }
}
