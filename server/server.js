const express = require('express')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const compression = require('compression')

const app = express()

app.use(compression({ threshold: 0 }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(favicon('./public/favicon.ico'))

app.use('/admin', require('./admin/base'))
app.use('/api', require('./api/index'))

module.exports = app
