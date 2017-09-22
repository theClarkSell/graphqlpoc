const logger = require('../../utility/logger')

const {
  GraphQLNonNull,
  GraphQLString } = require('graphql')

const {sessionInputType} = require('../../types')

module.exports = {
  type: GraphQLString,
  description: 'Create a new session',
  //deprecationReason: 'reason here', // this is valid on an operation as well
  args: {
    newSession: {
      name: 'newSession',
      type: new GraphQLNonNull(sessionInputType)
    }
  },
  resolve: (root, {newSession}, {mongo: {Sessions}}) => {
    logger.data(newSession)
    return new Promise((resolve, reject) => {
      let s = new Sessions(newSession)
      s.save()
        .then( r => resolve(r.id) )
        .catch(err => reject(err))
    })
  }
}
