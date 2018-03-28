var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    title : String,
    price : Number,
    quantity : Number,
    description : String,
    url : String
})

module.exports = mongoose.model('Products', productSchema)