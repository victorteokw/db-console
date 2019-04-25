const mongoose = require('mongoose');
const { Schema } = mongoose;

const modelOneSchema = new Schema({
  field1: String,
  field2: Number
}, {
  timestamps: true,
  collection: 'modelones'
});

module.exports = mongoose.model('ModelOne', modelOneSchema);
