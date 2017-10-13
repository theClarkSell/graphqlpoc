const logger = require('../../utility/logger');

const { GraphQLNonNull, GraphQLString } = require('graphql');

const { eventInputType } = require('../../types');

module.exports = {
  type: GraphQLString,
  description: 'Create a new session',
  // deprecationReason: 'reason here', // this is valid on an operation as well
  args: {
    newEvent: {
      name: 'newEvent',
      type: new GraphQLNonNull(eventInputType),
    },
  },
  resolve: (root, { newEvent }, { mongo: { Events } }) => {
    logger.data(newEvent);
    return new Promise((resolve, reject) => {
      const event = new Events(newEvent);
      event
        .save()
        .then(r => resolve(r.id))
        .catch(err => reject(err));
    });
  },
};
