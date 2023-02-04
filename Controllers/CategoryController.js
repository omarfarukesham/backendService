const {
    getCategoryService,
    updateCategoryService,
    postCategoryService,
    deleteCategoryService
} = require("../Businesslogic/CategoryServices")

const getCategroyController = async (req, res) => {
    try {
        const result = await getCategoryService()
        res.status(200).json({
            status: 'success',
            data: result
        })
    } catch (error) {
        res.status(500).json({
            status: 'Failed'
        })
    }
}
const updateCategroyController = async (req, res) => {
    try {
        const result = await updateCategoryService(req.params.id, req.body)
        res.status(200).json({
            status: 'success',
            data: result
        })
    } catch (error) {
        res.status(500).json({
            status: 'Failed'
        })
    }
}
const createCategroyController = async (req, res) => {
    try {
        const result = await postCategoryService(req.body)
        console.log(result);
        res.status(200).json({
            status: 'success',
            data: result
        })
    } catch (error) {
        res.status(500).json({
            status: 'Failed'
        })
    }
}
const deleteCategroyController = async (req, res) => {
    try {
        const result = await deleteCategoryService(req.params.id)
        res.status(200).json({
            status: 'success',
            data: result
        })
    } catch (error) {
        res.status(500).json({
            status: 'Failed'
        })
    }
}

module.exports = { getCategroyController, updateCategroyController, createCategroyController, deleteCategroyController }