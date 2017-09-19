const {GraphQLList} = require('graphql')

const logger        = require('../../utility/logger')
const getProjection = require('../../utility/projections')

const {session}     = require('../types')
const {Sessions}    = require('../../connectors/mongo')


module.exports = {
  type: new GraphQLList(session), //how is this an array?
  description: 'The sessions query will return you a list of all accepted sessions blaa blaa blaa.',
  //deprecationReason: 'reason here', // this is valid on an operation as well
  args: {},
  resolve: (root, args, options, fieldASTs) => {
    return new Promise((resolve, reject) => {
      logger.debug(`in speakers query`)
      const projection = getProjection(fieldASTs)
      Sessions.find({})
        .select(projection)
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }
}
