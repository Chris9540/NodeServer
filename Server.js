const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
let path = __dirname + "/app/frontend/dist/";
const server = express();
const database = require("./app/config/sequelize.config.js");

database.SQL.sync();
//database.SQL.sync({force:true}).then(()=>{console.log("Drop and re-sync db.");});

server.use(express.static(path));

server.use(cors({ origin: "http://localhost:8081" }));

// parse requests of content-type - application/json
server.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));

// simple route
server.get("/", (req, res) => {
  res.sendFile(path + "index.html");
});

require("./app/routes/employee.routes")(server);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
