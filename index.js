const express = require('express')
const db = require('./dbConfig')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! Visit /products to see the demo!')
})

app.get('/products', async (req, res) => {
  const request = await db.any('SELECT * FROM Products;');
  console.log('data', request)
  res.json(request)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
