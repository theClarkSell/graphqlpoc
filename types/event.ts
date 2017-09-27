
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList } from 'graphql'

import speaker from '../resolvers/speaker'
import session from '../resolvers/session'
import id from '../resolvers/id'

import speakerType from './speaker'
import sessionType from './session'

export default new GraphQLObjectType({
  name: 'EventType',
  description: 'A gathering of awesome that takes place on some regular interval',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'System generated unique id for this session.',
      resolve: (...args) => (<any>id)(...args)
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
      type: new GraphQLList(speakerType), //TODO:: runtime require due to circular reference
      description: 'Speakers for this event.',
      resolve: (...args) => (<any>speaker)(...args)
    },
    sessions: {
      type: new GraphQLList(sessionType), //TODO:: runtime require due to circular reference
      description: 'Sessions for this event.',
      resolve: (...args) => (<any>session)(...args)
    }
  })
})
