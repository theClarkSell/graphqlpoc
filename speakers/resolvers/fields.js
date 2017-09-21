
//field resolvers for types
const getProjection = require('../../utility/projections')

const sessions = ({_id}, args, {mongo: {Sessions}}, fieldASTs) => {
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

module.exports = {
  id,
  firstName,
  sessions
}
