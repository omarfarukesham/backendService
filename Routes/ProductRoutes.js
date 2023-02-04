const express = require('express')
const {
    getProductController,
    createProductController,
    updateProductController,
    deleteProductController,
    getSingleProductController,
    fileUloadProductController
} = require('../Controllers/ProductController')
const router = express.Router()
const multer = require('multer')

const uploader = multer({
    dest: "images/"
})

router.get('/product', getProductController)
router.get('/product/:id', getSingleProductController)
router.post('/product', createProductController)
router.patch('/product/:id', updateProductController)
router.delete('/product/:id', deleteProductController)
router.post('/file-upload', uploader.single('image'), fileUloadProductController)

module.exports = router