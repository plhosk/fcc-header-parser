require('babel-polyfill')
const createLocaleMiddleware = require('express-locale')
const useragent = require('express-useragent')
const express = require('express')
const app = express()

app.set('port', (process.env.PORT ||  5000))

app.use(createLocaleMiddleware())
app.use(useragent.express())

app.get('*', (req, res) => {
  //res.writeHead(200, { 'Content-Type': 'application/json' })
  res.send({
    ipaddress: req.ip,
    language: req.locale.code,
    software: req.useragent.source
  })
})

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'))
})