module.exports = (SQL, DataType) => {
  const Address = SQL.define("address", {
    id: {
      type: DataType.UUID,
      primaryKey: true,
      defaultValue: DataType.UUIDV1,
    },
    lineOne: {
      type: DataType.STRING,
    },
    lineTwo: {
      type: DataType.STRING,
    },
    lineThree: {
      type: DataType.STRING,
    },
    townCity: {
      type: DataType.STRING,
    },
    county: {
      type: DataType.STRING,
    },
    postcode: {
      type: DataType.STRING,
    },
  });
  return Address;
};
