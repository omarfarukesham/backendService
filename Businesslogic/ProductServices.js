const Product = require('../models/Products')
const Brand = require('../models/Brand')

exports.getProductService = async () => {
    const result = await Product.find({})
    return result
}

exports.getSingleService = async (id) => {
    const singleProduct = await Product.find({ _id: id })
    return singleProduct
}

exports.createProductService = async (data) => {
    // console.log(data);
    const pro = new Product(data)
    const result = await pro.save();

    const { _id: productId, brand } = result
    const updateBrand = await Brand.updateOne({ _id: brand.id }, {
        $push: { products: productId }
    })
    console.log(updateBrand.modifiedCount)
    return result;

}
exports.updateProductService = async (id, bodyData) => {
    const result = await Product.findByIdAndUpdate({ _id: id }, { $set: bodyData })
    return result
}

exports.deleteProductService = async (id) => {
    const result = await Product.deleteOne({ _id: id })
    return result
}