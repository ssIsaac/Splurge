// functions to handle CRUD operations for products, orders, and users
const Product = require('../models/Product')

exports.getAllProducts = async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});    
    } catch (error){
        res.status(500).json({ success: false, error: error.message});
    }
};