// const Sequelize = require('sequelize')

// const dbName = "async-week-project";

// //If you are using Heroku as a deployment service and Heroku Postgres as your database, remember that the database url in your Heroku environment will be available in an environment variable DATABASE_URL. Prepare your sequelize instance to take advantage of this, and only use your local database url if no DATABASE_URL is available.

// const db = new Sequelize(process.env.DATABASE_URL ||`postgres://localhost:5432/${dbName}`, {
//   logging: false,
// })

// // const db = new Sequelize(`postgres://localhost:5432/boilermaker`, {
// //   logging: false,
// // })



// module.exports = db;

const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

const config = {
  logging: false
};

if(process.env.LOGGING === 'true'){
  delete config.logging
}

// https://stackoverflow.com/questions/61254851/heroku-postgres-sequelize-no-pg-hba-conf-entry-for-host
if(process.env.DATABASE_URL){
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  };
}

const db = new Sequelize(

  process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`, config)


//   const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`, {
//   //dialect: 'postgres',
//   dialectOptions: {
//     ssl: false
//   }
// })

module.exports = db
