const express = require('express')
const app = express()
const port = 3002
const userRoutes = require("./routes/user")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/profile',(req,res)=>{
  res.send("This is your Profile Page")
})

app.get("/home",(req,res)=>{
  res.send("this is your home page")
})

app.post("/dukan",(req,res)=>{
  res.send("delivered")
})

app.use("/user", userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
