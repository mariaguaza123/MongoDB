const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    nameProduc: String,
    price: Number,
    stock : Number
});

//Creando el modelo

const ProductMDB = mongoose.model('Product',productSchema);

module.exports = ProductMDB;