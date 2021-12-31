const path = require('path');
const express = require('express');
const app = express();

// logging middleware
// Only use logging middleware when not running tests
const volleyball = require('volleyball')
const debug = process.env.NODE_ENV === 'test'
app.use(volleyball.custom({ debug }))

//static middleware
app.use(express.static(path.join(__dirname, '../public')))

//body-parsing middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//api
app.use('/api', require('./api'))

//for requests that don't match api routes
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public'));
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`serving up preposterously on port ${PORT}`))

//500 error
//Error-handling middleware
app.use((err, req, res) => {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

module.exports = app
