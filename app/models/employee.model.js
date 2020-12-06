module.exports = (SQL, DataType) => {
  const Employee = SQL.define("employee", {
    id: {
      type: DataType.UUID,
      primaryKey: true,
      defaultValue: DataType.UUIDV1,
    },
    firstName: {
      type: DataType.STRING,
    },
    lastName: {
      type: DataType.STRING,
    },
    emailId: {
      type: DataType.STRING,
    },
  });
  return Employee;
};