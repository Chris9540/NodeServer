const databaseConfig = require("./database.config.js");
const tables = require("./tables.config.js")
const Sequelize = require("sequelize");

const SQL = new Sequelize(databaseConfig.DB, databaseConfig.USER, databaseConfig.PASSWORD, {
  host: databaseConfig.HOST,
  dialect: databaseConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: databaseConfig.pool.max,
    min: databaseConfig.pool.min,
    acquire: databaseConfig.pool.acquire,
    idle: databaseConfig.pool.idle
  },
  define: {
    freezeTableName: true,
    underscored: true,
  }
});

const database = {};

database.Sequelize = Sequelize;
database.SQL = SQL;

buildTables();

module.exports = database;

function buildTables() {
    tables.forEach(t => {
        database[t.name] = require(`../models/${t.name}.model.js`) (SQL, Sequelize);
    });
    buildRelations();
}

function buildRelations() {
    tables.sort((a,b)=>{
        if(a.relation > b.relation) {
            return -1;
        }
        else if(a.relation < b.relation) {
            return 1;
        }
        else {
            return 0;
        }
    })
    tables.forEach(t=> {
        if(t.relation && t.relatedTable) {
        if(t.relation === "hasMany") {
            database[t.name].hasMany(database[t.relatedTable], {
                as : t.relatedTable
            })
        }
        else if(t.relation === "belongsTo" && t.foreignKey) {
            database[t.name].belongsTo(database[t.relatedTable], {
                foreignKey: t.foreignKey,
                as: `${t.relatedTable}_${t.foreignKey}`
            })
        }
        }
    })
}