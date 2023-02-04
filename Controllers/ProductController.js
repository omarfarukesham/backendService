const {
    getProductService,
    createProductService,
    updateProductService,
    deleteProductService,
    getSingleService
} = require("../Businesslogic/ProductServices")

const getProductController = async (req, res) => {
    try {
        const result = await getProductService()
        res.status(200).json({
            status: 'Success',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failed'
        })
    }
}

const createProductController = async (req, res) => {
    try {
        // console.log(req.body);
        const result = await createProductService(req.body)
        res.status(200).json({
            status: 'Success',
            data: result
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 'Failed to Insert Product Information'
        })
    }
}

const updateProductController = async (req, res) => {
    try {
        const result = await updateProductService(req.params.id, req.body)
        res.status(200).json({
            status: 'Success',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failed to updated'
        })
    }
}

const fileUloadProductController = async (req, res) => {
    try {
        res.status(200).json(req.file)
    } catch (error) {
        console.log(error);
    }
}
const getSingleProductController = async (req, res) => {
    try {
        const singleProduct = await getSingleService(req.params.id)
        res.status(200).json({
            status: 'Success',
            data: singleProduct
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed to load......"
        })
    }
}

const deleteProductController = async (req, res) => {
    try {
        const result = await deleteProductService(req.params.id)
        res.status(200).json({
            status: 'Success',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failed'
        })
    }
}

module.exports = {
    getProductController,
    createProductController,
    updateProductController,
    deleteProductController,
    getSingleProductController,
    fileUloadProductController
}