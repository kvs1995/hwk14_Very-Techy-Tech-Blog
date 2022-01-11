//import modules (sequelize and dotenv)
const Sequelize = require('sequelize')
require('dotenv').config();

//set sequelize variable;
let sequelize;

//if url then create new sequelize else connect with .env variables
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;