const getProjection = require('../utility/projections')

//speaker id is being passed in
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

//just a contrived example since there is no real field mapping
const firstName = (root) => root.firstName

module.exports = {
  firstName,
  sessions
}
