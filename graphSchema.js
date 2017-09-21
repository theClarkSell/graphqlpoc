
const logger = require('./utility/logger')
const _      = require('lodash')

const {
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql')

const queries = _.merge(
  require('./speakers/queries'),
  require('./sessions/queries')
)

const mutations = _.merge(
  require('./speakers/mutations'),
  // require('./sessions/mutations')
)

module.exports = new GraphQLSchema({

  query: new GraphQLObjectType({
    name: 'Query',
    fields: queries
  }),

  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutations
  })
  // directive: new GraphQLObjectType({
  //   name: 'Directive',
  //   fields: directives
  // }),
  // subscription: new GraphQLObjectType({
  //   name: 'Subscription',
  //   fields: subscriptions
  // })
})
