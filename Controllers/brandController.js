const { postBrandService, getBrandService, UpdatedServices, deleteService} = require("../Businesslogic/BrandServices")

//Data get controller from UI, Which can show on UI.............
const getBrandController = async (req, res) => {
    try {
      
        const queries = {}
        if (req.query.sorts) {
            const sortBy = req.query.sorts.split(',').join(' ')
            queries.sortBy = sortBy
        }
        if(req.params.id){
            const getById = req.params.id
            queries.getById = getById
        }
        // console.log(queries.getById);
        const result = await getBrandService(queries)
        res.status(200).json({
            status: 'Success',
            data: result

        })
    } catch (error) {
        res.status(400).json({
            status: 'Filed'
        })
    }
}

//data post controller from UI..................................
const postBrandController = async (req, res) => {
    try {
        const bodyData = req.body
        // console.log(bodyData);
        const result = await postBrandService(bodyData)
        res.status(200).json({
            status: 'success',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failed'
        })
    }
}

// update
const updateBrandController = async (req, res) => {
    const updateId = req.params.id
    // console.log(updateId)
    const bodyData = req.body
    try {
        const result = await UpdatedServices(updateId, bodyData)
        res.status(200).json({
            status: 'Successfully updated',
            data: result._id
        })
    } catch (error) {
        console.log(error)
        res.status(401).json({
            status: 'Fail...'
        })

    }
}

//delete product from database ..............................
const deleteBrandController = async(req, res)=>{
    try {
        const result = await deleteService(req.params.id)
        res.status(200).json({
            status:'success',
            data: result._id
        })
    } catch (error) {
        
    }
}

module.exports = { getBrandController, postBrandController, updateBrandController, deleteBrandController }