const {login,signup} = require("../controller/user")

const express = require("express")

const router = express.Router();

router.post("/login",(req,res)=>{
    console.log("login request")
    res.send("Succesfully Logged In ")
})

// router.post("/signup",signup)


module.exports = router;