const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/test-api', (req, res) => {
  // Todo remove test-api endpoint before release
  console.log(req.body)
  res.status(200).json({ result: req.body.text });
})

app.listen(port, () => {
  console.log(`Backend running on port ${port}`)
})
