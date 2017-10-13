// Called by the tito webhook.
exports.get = () =>
  function(request, reply) {
    const ticket = typeof request.payload === 'string' ? JSON.parse(request.payload) : request.payload;

    console.log(`get called`);
    console.log(ticket);
    reply('Hello World').code(200);
  };
