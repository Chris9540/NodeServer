module.exports = (server) => {
  const employee = require("../controllers/employee.controller.js");
  var router = require("express").Router();

  router.get("/pagedList", employee.pagedList);
  router.post("/create", employee.create)

  server.use("/api/employee", router);
};
