const express = require('express')
const simpleRoute = require('./routes/simple-route');
//const morgan = require('morgan')

const app = express()
//app.use(morgan('tiny'))
app.use('/simple', simpleRoute);


app.get('/', (req, res) => {
  // Send JSON
  res.send({ status: 'on' })
})

module.exports = app
