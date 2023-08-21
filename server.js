const express = require('express')
const cors = require('cors');
const SSE = require('./sse');

const sse = new SSE(['something']);

const app = express()

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/stream', async (req, res) => {
  sse.init(req, res);
});

app.listen(3000)