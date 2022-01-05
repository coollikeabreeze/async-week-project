const { db } = require('./server/db')
const app = require('./server')
const PORT = process.env.PORT || 8080

db.sync()
  .then(() => {
    console.log('database is synced')
    //create a new server (app.listen)
    app.listen(PORT, () => console.log(`serving up preposterously on port ${PORT}`))
  })

// app.listen(PORT, () => console.log(`serving up preposterously on port ${PORT}`))
