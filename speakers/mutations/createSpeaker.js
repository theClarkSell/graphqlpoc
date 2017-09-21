
const {GraphQLNonNull, GraphQLString, GraphQLObjectType} = require('graphql')
const logger = require('../../utility/logger')

const fieldResolvers = require('../queries/fieldResolvers')
const {speaker, speakerInput} = require('../types')(fieldResolvers)

module.exports = {
  type: GraphQLString,
  description: 'Create a new speaker',
  //deprecationReason: 'reason here', // this is valid on an operation as well
  args: {
    newSpeaker: {
      name: 'newSpeaker',
      type: new GraphQLNonNull(speakerInput)
    }
  },
  resolve: (root, {newSpeaker}, {mongo: {Speakers}}) => {
    logger.data(newSpeaker)
    return new Promise((resolve, reject) => {
      let s = new Speakers(newSpeaker)
      s.save()
        .then( r => resolve(r.id) )
        .catch(err => reject(err))
    })
  }
}
