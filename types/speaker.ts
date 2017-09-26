import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList } from 'graphql'
  
import session from  '../resolvers/session'
import {firstName} from '../resolvers/speaker'
import id from '../resolvers/id'

import sessionType from './session'

export default new GraphQLObjectType({
  name: 'SpeakerType',
  description: 'A speaker is defined as someone who actually speaks but not to be confused with anyone who can speak.',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'System generated unique id for this speaker.',
      resolve: (...args) => id(...args)
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Speakers First Name',
      resolve: (...args) => firstName(...args)
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
      type: new GraphQLList(sessionType), // TODO:: runtime require here as  it's a circular reference
      description: 'sessions....',
      resolve: (...args) => session(...args)
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
