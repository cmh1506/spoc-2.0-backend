var express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.send('Liebling, es ist aus. Aus aus aus.')
})

app.listen(3000)