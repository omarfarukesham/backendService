const express = require('express')
const {
    getCategroyController,
    createCategroyController,
    updateCategroyController,
    deleteCategroyController
} = require('../Controllers/CategoryController')

const router = express.Router()


router.get('/category', getCategroyController)
router.post('/category', createCategroyController)
router.patch('/category/:id', updateCategroyController)
router.delete('/category/:id', deleteCategroyController)


module.exports = router