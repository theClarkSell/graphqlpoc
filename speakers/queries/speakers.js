
const {
  GraphQLList,
  GraphQLString }  = require('graphql')

const logger        = require('../../utility/logger')
const getProjection = require('../../utility/projections')
const {speakerType} = require('../../types')

module.exports = {
  type: new GraphQLList(speakerType), //how is this an array?
  description: 'The speakers query will return you a list of all speakers blaa blaa blaa.',
  //deprecationReason: 'reason here', // this is valid on an operation as well
  args: {},
  resolve: (root, args, {mongo: {Speakers}}, fieldASTs) => {
    return new Promise((resolve, reject) => {
      logger.debug(`in speakers query`)
      const projection = getProjection(fieldASTs)
      Speakers.find({})
        .select(projection)
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }
}
