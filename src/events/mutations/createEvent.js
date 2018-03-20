import { logger } from "../../utility/logger";

import { GraphQLNonNull, GraphQLString } from "graphql";
import { eventInputType } from "../../types";

module.exports = {
  type: GraphQLString,
  description: "Create a new session",
  deprecationReason: "she gone leave me", // this is valid on an operation as well
  args: {
    newEvent: {
      name: "newEvent",
      type: new GraphQLNonNull(eventInputType)
    }
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
  }
};
