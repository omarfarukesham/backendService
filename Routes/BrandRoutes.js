const express = require('express')
const { getBrandController, postBrandController, updateBrandController, deleteBrandController } = require('../Controllers/brandController')

const router = express.Router()

router.get('/brand', getBrandController)
router.get('/brand/:id', getBrandController)
router.post('/brand', postBrandController)
router.patch('/brand/:id', updateBrandController)
router.delete('/brand/:id', deleteBrandController)


module.exports = router
