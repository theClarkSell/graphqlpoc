const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList
} = require('graphql')

const speakerInput = require('../../speakers/types')

module.exports = new GraphQLObjectType({
  name: 'sessionType',
  description: 'A session is defined as a presentaiton that a speaker will give.',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'System generated unique id for this session.'
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Title of this session.'
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Brief overview detatailing what this session will be about.'
    },
    // speakers: {
    //   type: new GraphQLList(speaker),
    //   description: 'speakers on the sessions'
    // }
  })
})
