const {getAllProducts,updateProduct,deleteProduct,createNewProduct} = require("../controller/product")

const express = require("express")
const router = express.Router();

router.get("/getAll", getAllProducts )

router.post("/create", createNewProduct )

router.put('/updateProduct', updateProduct)

router.delete('/deleteProduct', deleteProduct )

module.exports = router;