const mongoose = require('mongoose');
const { Schema } = mongoose;

const modelTwoSchema = new Schema({
  field1: String,
  field2: Number
}, {
  timestamps: true,
  collection: 'modeltwos'
});

module.exports = mongoose.model('ModelTwo', modelTwoSchema);
