const Brand = require("../models/Brand")

exports.getBrandService = async (queries) => {
    if (queries.getById) {
        const result = await Brand.find({ _id: queries.getById }).sort(queries.sortBy)
        return result
    }
    const result = await Brand.find({}).sort(queries.sortBy).populate('products')
    return result
}

exports.postBrandService = async (data) => {
    const brand = new Brand(data)
    // console.log('BlOGIC '+ brand)
    const result = await brand.save()
    console.log(result)
    return result
}

exports.UpdatedServices = async (id, data) => {
    // console.log(id, data);
    const result = await Brand.findByIdAndUpdate({ _id: id }, { $set: data })
    return result
}

exports.deleteService = async (id) => {
    const result = await Brand.deleteOne({ _id: id })
    return result
}