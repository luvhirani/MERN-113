const express = require("express")
const router = express.Router();
const {getAllProducts,updateProduct,deleteProduct,createNewProduct, getOneProduct} = require("../controller/product")

router.get("/getAll", getAllProducts )

router.post("/create", createNewProduct )

router.put('/updateProduct/:id', updateProduct)

router.delete('/deleteProduct/:id', deleteProduct )

router.get("/getOneProduct/:id", getOneProduct )

module.exports = router;