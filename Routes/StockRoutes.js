const express = require("express")
const router = express.Router()
const { getStockController, postStockController, getStockDetailController, updateStockController, deleteStockController } = require('../Controllers/StockController')
router.get('/stock', getStockController)
// router.get('/stock/:id', getStockDetailController)
router.post('/stock', postStockController)
router.patch('/stock/:id', updateStockController)
router.delete('/stock/:id', deleteStockController)


module.exports = router