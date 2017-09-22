const getProjection = require('../utility/projections')

const speaker = ({speakers}, args, {mongo: {Speakers}}, fieldASTs) => {
  const projection = getProjection(fieldASTs)
  return new Promise((resolve, reject) => {
    Speakers
      .find({_id: {$in: speakers} })
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
  speaker
}
