
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList } = require('graphql')

const resolver = require('../resolvers/fields')
const {sessionType} = require('../../sessions/types')

module.exports = new GraphQLObjectType({
  name: 'speaker',
  description: 'A speaker is defined as someone who actually speaks but not to be confused with anyone who can speak.',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'System generated unique id for this speaker.',
      resolve: (...args) => resolver.id(...args)
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Speakers First Name',
      resolve: (...args) => resolver.firstName(...args)
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Speakers Last Name'
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Speakers Email Address'
    },
    sessions: {
      type: new GraphQLList(sessionType),
      description: 'sessions....',
      resolve: (...args) => resolver.sessions(...args)
    },
    company: {
      deprecationReason: 'We really do not care where you work we care what you do',
      type: GraphQLString,
      description: 'Speakers Company'
    },
    companyAddress: {
      deprecationReason: 'We really do not care where your company is located',
      type: GraphQLString,
      description: 'Speakers Company Address'
    }
  })
})
