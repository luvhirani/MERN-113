const login =(req, res) => {
    console.log(req.body);
    res.send("Logged In Successfully")
}

const signup =(req, res) =>{
    // const {username, email, password} = req.body;
    // console.log(username,email, password)
    // console.log({req})
    console.log(req.body);
    res.send("Account Created Successfully")
}

module.exports = { login,signup }
