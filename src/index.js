import {} from "dotenv/config";

import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { express as voyager } from "graphql-voyager/middleware";

import { logger } from "./utility/logger";
import mongo from "./db/mongo";
import routes from "./routes";

const app = express();
routes(app);

const paths = {
  graphql: `/graphql`,
  graphiql: `/graphiql`,
  voyager: `/voyager`
};

app.use(
  paths.graphql,
  bodyParser.json(),
  graphqlExpress(request => ({
    //tracing: true,
    pretty: true,
    schema: require("./graphSchema"),
    context: {
      request,
      mongo // could pass things in here like user context down to each resolver.
    }
  }))
);

app.get(paths.graphiql, graphiqlExpress({ endpointURL: paths.graphql }));

app.use(
  "/voyager",
  voyager({
    endpointUrl: paths.graphql,
    displayOptions: {
      sortByAlphabet: true
    }
  })
);

try {
  app.listen(8000);
} catch (err) {
  logger.debug(`Error while starting server: ${err.message}`);
}

logger.debug(`Server running at:`);
