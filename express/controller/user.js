const login =(req, res) => {
    res.send("Logged In Successfully")
}

const signup =(req, res) =>{
    res.send("Account Created Successfully")
}

module.exports = { login,signup }