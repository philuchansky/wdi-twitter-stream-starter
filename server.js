const
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  port = process.env.PORT || 3000

app.use(logger('dev'))
app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
  res.sendFile(`{__dirname}/public/index.html`)
})

app.listen(port, (err) => {
  console.log(err || port)
})