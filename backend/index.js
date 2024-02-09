const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// POST endpoint
app.post('/test-api', (req, res) => {
  console.log(req.body)
  res.status(200).json({ result: req.body.text });
})

// GET endpoint with no parameters
app.get('/test-api', (req, res) => {
  console.log(req.query)
  res.status(200).json({ result: req.query });
})

// GET endpoint with path parameter
app.get('/test-api/:input', (req, res) => {
  console.log(req.params)
  res.status(200).json({ result: req.params.input });
})

app.listen(port, () => {
  console.log(`Backend running on port ${port}`)
})
