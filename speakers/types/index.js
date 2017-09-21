
module.exports = (resolver) => {
  const speaker      = require('./speaker')(resolver)
  const speakerInput = require('./speakerInput')(resolver)

  return { speaker, speakerInput }
}
