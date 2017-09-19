
const {GraphQLList} = require('graphql')

const logger        = require('../../utility/logger')
const getProjection = require('../../utility/projections')
const {speaker}     = require('../types')(this)

//default export
const speakers = {
  type: new GraphQLList(speaker), //how is this an array?
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

//field resolvers

const sessionResolver = ({_id}, args, {mongo: {Sessions}}, fieldASTs) => {
  const projection = getProjection(fieldASTs)
  return new Promise((resolve, reject) => {
    Sessions
      .find({speakers: {$in: [_id]} })
      .select(projection)
      .exec()
      .then(r => resolve(r))
      .catch(err => reject(err))
  })
}

const firstName = (root) => root.firstName
const id = (root) => root._id || root.id

module.exports = speakers
exports.fieldResolvers = {
  id: id,
  firstName: firstName,
  sessions: sessionResolver
}
