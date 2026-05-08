import express from "express";
import { addToCart, removeItem, updateQuantity, getCart} from "../controllers/cartController";

const router = express.Router();

// Add item to cart
router.post('/add', addToCart);

// Remove item from cart
router.post('/remove', removeItem);

// Update item from cart
router.post('/update', updateQuantity);

// Get user cart
router.post('/:userId', getCart);

export default router;