
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList } = require('graphql')

const {speaker} = require('../resolvers/speaker')
const {session} = require('../resolvers/session')
const {id} = require('../resolvers/id')

module.exports = new GraphQLObjectType({
  name: 'eventType',
  description: 'A gathering of awesome that takes place on some regular interval',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'System generated unique id for this session.',
      resolve: (...args) => id(...args)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Name of the event'
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Brief overview detatailing what this session will be about.'
    },
    year: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The year this event takes place'
    },
    speakers: {
      type: new GraphQLList(require('./speaker')), //TODO:: runtime require due to circular reference
      description: 'Speakers for this event.',
      resolve: (...args) => speaker(...args)
    },
    sessions: {
      type: new GraphQLList(require('./session')), //TODO:: runtime require due to circular reference
      description: 'Sessions for this event.',
      resolve: (...args) => session(...args)
    }
  })
})
