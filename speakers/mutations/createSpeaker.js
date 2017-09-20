
const {GraphQLNonNull, GraphQLString, GraphQLObjectType} = require('graphql')
const logger = require('../../utility/logger')

const fieldResolvers = require('../queries/fieldResolvers')
const {speakerType, speakerInputType} = require('../types')(fieldResolvers)

module.exports = {
  type: GraphQLString, //GraphQLString, //return type
  description: 'Create a new speaker',
  //deprecationReason: 'reason here', // this is valid on an operation as well
  args: {
    newSpeaker: {
      name: 'newSpeaker',
      type: new GraphQLNonNull(speakerInputType)
    }
  },
  resolve: (root, {newSpeaker}, {mongo: {Speakers}}) => {
    logger.data(newSpeaker)
    return new Promise((resolve, reject) => {
      let s = new Speakers(newSpeaker)
      s.save()
        .then( r => resolve(r) )
        .catch(err => reject(err))
    })
  }
}
