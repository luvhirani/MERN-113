const express = require('express')
const app = express()
const port = 3002
const userRoutes = require("./routes/user")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/user", userRoutes)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
