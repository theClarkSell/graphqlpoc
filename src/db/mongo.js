import mongoose from "mongoose";
import { logger } from "../utility/logger";

import {
  event as Events,
  speaker as Speakers,
  session as Sessions
} from "./models";

const user = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const database = process.env.MONGO_DB;

const mongodbUri = `mongodb://${user}:${password}@${database}`;

mongoose.Promise = global.Promise;
mongoose.connect(mongodbUri, {});

const db = mongoose.connection;
db.on("error", () => logger.error(`mongo connection couldn't be established`));
db.once("open", () => logger.debug(`mongo connection established`));
db.on("close", () => {
  logger.debug("mongo connection closed");
  process.exit(0);
});

module.exports = {
  Events,
  Sessions,
  Speakers
};
