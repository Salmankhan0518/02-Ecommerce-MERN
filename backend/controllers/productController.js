import Product from "../models/product.js"

// Create a new Product
export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.json({
            message: 'Product created successfully',
            product,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error', error})
    }
}

//Get all products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.json(products)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error', error})
    }
}

//Update a Product 
export const updateProduct = async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true}
        )
        res.json({
            message: 'Product updated successfully',
            updated,
        })
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error})
    }
}

// Delete a Product
export const deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.findByIdAndDelete( req.params.id )
        res.json({ message: 'Product delete successfully'})
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error})
    }
}