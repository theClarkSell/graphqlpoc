import { logger } from "../../utility/logger";

import { GraphQLNonNull, GraphQLString } from "graphql";

import { sessionInputType } from "../../types";

module.exports = {
  type: GraphQLString,
  description: "Create a new session",
  // deprecationReason: 'reason here', // this is valid on an operation as well
  args: {
    newSession: {
      name: "newSession",
      type: new GraphQLNonNull(sessionInputType)
    }
  },
  resolve: (root, { newSession }, { mongo: { Sessions } }) => {
    logger.data(newSession);
    return new Promise((resolve, reject) => {
      const s = new Sessions(newSession);
      s
        .save()
        .then(r => resolve(r.id))
        .catch(err => reject(err));
    });
  }
};
