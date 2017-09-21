
const getProjection = require('../utility/projections')

const sessions = ({_id, sessions}, args, {mongo: {Sessions}}, fieldASTs) => {
  const projection = getProjection(fieldASTs)
  return new Promise((resolve, reject) => {
    Sessions
      .find({_id: {$in: sessions} })
      .select(projection)
      .exec()
      .then(r => resolve(r))
      .catch(err =>  reject(err))
  })
}


const speakers = ({_id, speakers}, args, {mongo: {Speakers}}, fieldASTs) => {
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

module.exports = {
  sessions,
  speakers
}
