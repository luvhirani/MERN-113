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
const updateProduct = async (req, res)=>{ //localhost:3002/products/updateProduct/:id
    console.log("req.params:",req.params)
    // console.log("req.body:",req.body)

    let pid = req.params.id;
    let {name, category} = req.body;

    try{
        let response = await pool.query("UPDATE products SET name=?,category=? WHERE pId=?",[name,category,pid])
        res.send({message:"Product updated", response});
    }
    catch(error){
        console.log(error)
    }
}
const deleteProduct = async (req,res)=>{
    let pid = req.params.id;
    console.log(req.params)
    try {
        const response = await pool.query("DELETE FROM products WHERE pId=?",[pid])
        res.send({message:"Product deleted", response});
    } catch (error) {
        console.log(error)
    }
}

const getOneProduct = async (req,res) => {
    let pId = req.params.id;
    console.log(pId)
    try{
        const response = await pool.query("SELECT * FROM products WHERE pId = ?",[pId])
        console.log(response[0])
        res.send({message :"Product successfullt fetched using ID"})
    }
    catch(error){
        console.log(error)
    }
} 

module.exports = {getAllProducts,createNewProduct,updateProduct,deleteProduct, getOneProduct}