import Cart from "../models/Cart";

// Add Item To Cart
export const addToCart = async (req, res) => {
    try {
        const { userId, productId } = req.body;

        let cart = await Cart.findOne({userId});

        if(!cart) {
            cart = new Cart({userId, items: [
                { productId, quantity: 1}
            ]})
        } else {
            const item = cart.items.find(
                i => i.productId.toString() == productId
            )
        }

        if(item) {
            item.quantity += 1;
        } else {
            cart.items.push({ productId, quantity: 1 })
        }

        await cart.save();
        res.json({
            message: 'Item added to cart',
            cart
        })

    } catch (error) {
        res.status(500).json( {message: 'Server Error', error})
    }
}

// Remove Item From cart
export const removeItem = async (req, res) => {
    try {
        const {userId, productId} = req.body;
        const cart = await Cart.findOne({userID});

        if(!cart) {
            res.status(400).json({message: 'Cart not found'})
        }

        cart.items = cart.items.filter(
            i => i.productId.toString() !== productId
        );

        await cart.save()
        res.json({
            message: 'Item remove from cart',
            cart
        })
        
    } catch (error) {
        res.status(500).json( {message: 'Server Error', error})
    }
} 


// Update item Quantity in cart
export const updateQuantity = async (req, res) => {
    try {
        const { userID, productId } = req.body;
        const cart = await Cart.findOne({userID})

        if(!cart) {
            res.status(400).json({message: 'Cart not found'})
        }

        const item = cart.items.find(
            i => i.productId.toString() === productId
        );

        if(!item) {
            return res.status(400).json({ message: "Itme not found in cart"})
        }

        item.quantity = quantity;
        await cart.save();
        res.json({
            message: "Item Quantity updated",
            cart
        })


    } catch (error) {
        res.status(500).json( {message: 'Server Error', error})
    }
}