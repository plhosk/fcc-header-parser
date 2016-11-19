const express = require(express)
const app = express()

app.set('port', (process.env.PORT ||  5000))

app.get('*', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(req)
})

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'))
})