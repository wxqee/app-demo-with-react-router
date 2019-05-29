const express = require('express')
const app = express()
const path = require('path')
const port = 9090

app.use(express.static(path.resolve(__dirname, 'fe')));

app.get('/*', (req, res) => {
  console.log('%s %s', req.method, req.originalUrl);
  res.sendFile(path.resolve(__dirname, 'fe/index.html'));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
