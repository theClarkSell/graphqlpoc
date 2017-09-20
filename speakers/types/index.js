
module.exports = (resolver) => {
  const speakerType      = require('./speaker')(resolver)
  const speakerInputType = require('./speakerInput')(resolver)

  return { speakerType, speakerInputType }
}
