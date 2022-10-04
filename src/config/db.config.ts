import { Sequelize } from 'sequelize';

const db = new Sequelize('app', 'root', '', {
  storage: process.env.NODE_ENV === 'test' ? './database_test.sqlite' : './database.sqlite',
  dialect: 'sqlite',
  logging: false,
});

export default db;

// const config = {
//   development: {
//     database: process.env.DB_CONFIG_DEV,

//     ...databaseEnvDetails,
//   },

//   test: {
//     database: process.env.DB_CONFIG_TEST,

//     ...databaseEnvDetails,
//   },

//   production: {
//     DATABASE_URL: process.env.DATABASE_URL,
//   },
// };

// module.exports = config;
