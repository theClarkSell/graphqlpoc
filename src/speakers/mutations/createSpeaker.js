const logger = require("../../utility/logger");

const { GraphQLNonNull, GraphQLString } = require("graphql");

const { speakerInputType } = require("../../types");

module.exports = {
  type: GraphQLString,
  description: "Create a new speaker",
  // deprecationReason: 'reason here', // this is valid on an operation as well
  args: {
    newSpeaker: {
      name: "newSpeaker",
      type: new GraphQLNonNull(speakerInputType)
    }
  },
  resolve: (root, { newSpeaker }, { mongo: { Speakers } }) => {
    logger.data(newSpeaker);
    return new Promise((resolve, reject) => {
      const s = new Speakers(newSpeaker);
      s
        .save()
        .then(r => resolve(r.id))
        .catch(err => reject(err));
    });
  }
};
