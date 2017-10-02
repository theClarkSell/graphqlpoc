
import * as logger from './utility/logger'
import * as _ from 'lodash'

import * as speakersQueries from './speakers/queries'
import * as sessionsQueries from './sessions/queries'
import * as eventsQueries from './events/queries'

import {
  GraphQLSchema,
  GraphQLObjectType,
}  from 'graphql'

const queries = _.merge(
  speakersQueries,
  sessionsQueries,
  eventsQueries
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
