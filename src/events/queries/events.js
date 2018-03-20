import { GraphQLList } from "graphql";
import { logger } from "../../utility/logger";
import getProjection from "../../utility/projections";
import { eventType } from "../../types";

module.exports = {
  type: new GraphQLList(eventType), // how is this an array?
  description: "Returns the list of events",
  // deprecationReason: 'reason here', // this is valid on an operation as well
  args: {},
  resolve: (root, args, { mongo: { Events } }, fieldASTs) =>
    new Promise((resolve, reject) => {
      logger.debug(`in events query`);
      const projection = getProjection(fieldASTs);
      Events.find({})
        .select(projection)
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err));
    })
};
