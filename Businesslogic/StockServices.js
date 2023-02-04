
const stock = require('../models/Stock')

exports.getStockService = async () => {
    const result = await stock.find({})
    return result
}

exports.postStockService = async (data) => {
    const stockInsert = new stock(data)
    const result = await stockInsert.save()
    return result
}

exports.updateStockService = async (id, bodyData) => {
    const result = await stock.updateOne({ _id: id }, { $set: bodyData })
    return result
}

exports.deleteStockService = async (id) => {
    const result = await stock.deleteOne({ _id: id })
    return result
}