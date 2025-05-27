import express from 'express'
const app = express()

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}
const requestTime = function (req, res, next) {
  req.requestTime = Date.now()

  console.log(req.requestTime)
  next()
}


app.use(requestTime)
app.use(myLogger)

app.get('/', (req, res) => {
  res.send(req.requestTime)
})

app.listen(3000)
