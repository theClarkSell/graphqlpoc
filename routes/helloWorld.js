//Called by the tito webhook.
exports.get = (database) => {
  return function (request, reply) {
    let ticket = typeof request.payload === 'string'
      ? JSON.parse(request.payload) : request.payload

    console.log(`get called`)
    reply('Hello World').code(200)
  }
}
