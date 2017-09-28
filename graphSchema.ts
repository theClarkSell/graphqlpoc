
import * as logger from './utility/logger'
import * as _ from 'lodash'

import {
  GraphQLSchema,
  GraphQLObjectType,
}  from 'graphql'

const queries = _.merge(
  require('./speakers/queries'),
  require('./sessions/queries'),
  require('./events/queries')
)

const mutations = _.merge(
  require('./speakers/mutations'),
  require('./sessions/mutations'),
  require('./events/mutations')
)

export default new GraphQLSchema({

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
