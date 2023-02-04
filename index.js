const express = require('express')
const mongoose = require('mongoose')

const app = express()
const cors = require("cors");

app.use(express.json());
app.use(cors());
const BrandRoutes = require("./Routes/BrandRoutes");
const CategoryRoute = require('./Routes/CategoryRoutes')
const ProductRoute = require('./Routes/ProductRoutes')

app.use('/', BrandRoutes)
app.use('/', CategoryRoute)
app.use('/', ProductRoute)

// database connection
mongoose.connect('mongodb://localhost/inventorySystem', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log(`Database connection is successful 🛢`);
})

app.listen(5000, () => {
    console.log('Server is running on the :: 5000')
})