const getProjection = require('../utility/projections')

//session id is being passed in
const speakers = ({_id}, args, {mongo: {Speakers}}, fieldASTs) => {
  const projection = getProjection(fieldASTs)
  return new Promise((resolve, reject) => {
    Speakers
      .find({sessions: {$in: [_id]} })
      .select(projection)
      .exec()
      .then(r => resolve(r))
      .catch(err => reject(err))
  })
}

module.exports = {
  speakers
}
