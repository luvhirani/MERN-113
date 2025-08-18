const express = require('express')
const app = express()
const port = 3002
const userRoutes = require("./routes/user")
const productRoutes = require("./routes/products")

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/user", userRoutes)

app.use('/products', productRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

