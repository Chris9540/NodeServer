const database = require("../config/sequelize.config");
const Employee = database.employee;
const Op = database.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.firstName || !req.body.lastName) {
    res.status(400).send({
      message: "Required : first name, last name",
    });
    return;
  }

  let employeeData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };
  if (req.body.emailId) {
    employeeData.emailId = req.body.emailId;
  }

  Employee.create(employeeData)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Employee.",
      });
    });
};

exports.pagedList = (req, res) => {
  if (!req.query.page || !req.query.size) {
    res.status(400).send({
      message: "Requires page and size",
    });
    return;
  }
  const LIMIT = parseInt(req.query.size);
  const OFFSET = parseInt(req.query.size * req.query.page);
  Employee.findAndCountAll({
    limit: LIMIT,
    offset: OFFSET,
    where: {},
    order: [
        ["lastName" , "ASC"]
    ]
  })
    .then((data) => res.send(data))
    .catch((err) => {
      message: err.message || "Some error occurred while retrieving employees.";
    });
};
