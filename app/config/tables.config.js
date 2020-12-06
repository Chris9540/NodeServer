module.exports = [
    {
        name : "employee",
        relation : "belongsTo",
        relatedTable : "address",
        foreignKey : "addressId"
    },
    {
        name : "address",
        relation : "hasMany",
        relatedTable : "employee"
    }
];