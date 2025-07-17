const pool = require("../db/db.config")

const getAllProducts = async (req, res)=>{ //localhost:3002/products/getAll

    console.log("request received")
try {
   const response = await pool.query("SELECT * FROM products")
   res.send({message:"This is the list of All products", response})

} catch (error) {
    console.log(error,"Error fething Products")
}}

const createNewProduct = async (req, res)=>{ //localhost:3002/products/create
    let {pid,name,category} = req.body
    console.log(pid,name,category)
    try {
        const response = await pool.query("INSERT INTO products VALUES (?,?,?)",[pid,name,category])
        res.send({message:"Created new product", response})
    } catch (error) {
        console.log(error,"Error in creating new Product")
    }
}
const updateProduct = (req, res)=>{
    
}
const deleteProduct = (req, res)=>{
    
}

module.exports = {getAllProducts,createNewProduct,updateProduct,deleteProduct}