import express from "express"
import { createProduct, updateProduct, deleteProduct, getProducts } from "../controllers/productController.js"

const router = express.Router();

// Route to create a Product 
router.post('/add', createProduct)

// Route to get all products
router.get('/', getProducts)

// Route to update a Productby ID
router.put('/update/:id', updateProduct)

// Route to delete a product bt ID
router.delete('/delete/:id', deleteProduct)

export default router;