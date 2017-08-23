import Mongoose from 'mongoose';
var Schema = Mongoose.Schema;

var ProductSchema = new Schema({
  title: {type: String, required: true},
  description: String,
  price: String,
  img: String
});

module.exports = Mongoose.model('product', ProductSchema);