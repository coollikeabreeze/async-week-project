const Sequelize = require('sequelize')

const dbName = "boilermaker";

//If you are using Heroku as a deployment service and Heroku Postgres as your database, remember that the database url in your Heroku environment will be available in an environment variable DATABASE_URL. Prepare your sequelize instance to take advantage of this, and only use your local database url if no DATABASE_URL is available.

const db = new Sequelize(process.env.DATABASE_URL ||`postgres://localhost:5432/${dbName}`, {
  logging: false,
})

// const db = new Sequelize(`postgres://localhost:5432/boilermaker`, {
//   logging: false,
// })



module.exports = db;
