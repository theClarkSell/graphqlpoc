module.exports = () => [
  {
    method: "GET",
    path: "/api/helloWorld",
    handler: require("./helloWorld").get()
  }
];
