const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Brand name missing'],
    unique: true
  },
  logo: {
    type: String,
    required: false
  },
  industry: {
    type: String,
    required: [true, 'Brand industry type missing'],
    uppercase: true
  },
  parentID: {
    type: ObjectId,
    required: false,
    ref: 'Brand'
  },
  score: {
    type: ObjectId,
    required: false,
    ref: 'Score'
  }
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
