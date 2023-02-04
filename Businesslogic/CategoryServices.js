const category = require("../models/Category")

exports.getCategoryService = async () => {
    const result = await category.find({})
    return result
}

exports.postCategoryService = async (data) => {
    const info = new category(data)
    const result = await info.save(info)
    return result
}

exports.updateCategoryService = async (id, bodyData) => {
    const result = await category.findByIdAndUpdate({ _id: id }, { $set: bodyData })
    return result
}

exports.deleteCategoryService = async (id) => {
    const result = await category.deleteOne({ _id: id })
    return result
}