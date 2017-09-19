
const logger                             = require('./utility/logger')
const _                                  = require('lodash')
const {GraphQLSchema, GraphQLObjectType, GraphQLList} = require('graphql')

// const {speaker, speakerInput} = require('./speakers/types')
// const {session, sessionInput} = require('./sessions/types')
// const types = [speaker, speakerInput, session, sessionInput]

const queries = _.merge(
  require('./speakers/queries'),
  require('./sessions/queries')
)

// const mutations = _.merge(
//   require('./speakers/mutations'),
//   require('./sessions/mutations')
// )

const directives    = {}
const subscriptions = {}

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: queries
  }),

  // mutation: new GraphQLObjectType({
  //   name:   'Mutation',
  //   fields: mutations
  // }),
  // directive: new GraphQLObjectType({
  //   name: 'Directive',
  //   fields: directives
  // }),
  // subscription: new GraphQLObjectType({
  //   name: 'Subscription',
  //   fields: subscriptions
  // })
})
