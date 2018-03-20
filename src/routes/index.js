import * as helloWorld from "./helloWorld";

const registerRoutes = app => {
  app.route("/api/helloWorld").get(helloWorld.get);
};

export default registerRoutes;
