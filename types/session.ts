import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList } from 'graphql'

import speaker from '../resolvers/speaker'
import id from '../resolvers/id'

import speakerType from './speaker'

export default new GraphQLObjectType({
  name: 'SessionType',
  description: 'A session is defined as a presentaiton that a speaker will give.',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'System generated unique id for this session.',
      resolve: (...args) => id(...args)
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Title of this session.'
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Brief overview detatailing what this session will be about.'
    },
    speakers: {
      type: new GraphQLList(speakerType), //TODO:: runtime require due to circular reference
      description: 'speakers on the sessions',
      resolve: (...args) => speaker(...args)
    }
  })
})
