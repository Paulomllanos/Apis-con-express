const express = require('express')
const { addProduct, getProduct, deleteProduct, editProduct } = require('../controllers/Products.controllers')

const router = express.Router()

router.route('/products')
    .post(addProduct)
    .get(getProduct)

router.route('/products/:productId')
    .delete(deleteProduct)
    .put(editProduct)

module.exports = router;