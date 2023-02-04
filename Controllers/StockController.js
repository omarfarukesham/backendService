const { getStockService, postStockService, updateStockService, deleteStockService } = require("../Businesslogic/StockServices");

const getStockController = async (req, res) => {
    try {
        const result = await getStockService(req.params.id)
        res.status(200).json({
            status: 'Success',
            data: result
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'Failed to get stock result'
        })
    }
}

const postStockController = async (req, res) => {
    try {
        const result = await postStockService(req.body)
        res.status(200).json({
            status: 'Success',
            data: result
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'Failed to insert  stock'
        })
    }
}

const updateStockController = async (req, res) => {
    try {
        const result = await updateStockService(req.params.id, req.body)
        res.status(200).json({
            status: 'Success',
            data: result
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'Failed to update stock'
        })
    }
}

const deleteStockController = async (req, res) => {
    try {
        const result = await deleteStockService(req.params.id)
        res.status(200).json({
            status: 'Success',
            data: result
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'Failed to delete stock'
        })
    }
}


module.exports = { getStockController, postStockController, updateStockController, deleteStockController }