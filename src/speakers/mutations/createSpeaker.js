import { logger } from "../../utility/logger";

import { GraphQLNonNull, GraphQLString } from "graphql";

import { speakerInputType } from "../../types";

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
