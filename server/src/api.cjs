const express = require('express')
const app = express()
const port = 5172

app.get('/', (req, res) => {
  res.send('Start of API functionality')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
