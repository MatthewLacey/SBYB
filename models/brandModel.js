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
  numEmployees: {
    type: Number,
    required: false,
    min: 0
  },
  sustainabilityScore: {
    type: Number,
    required: [true, 'Brand sustainability score missing'],
    default: 5,
    min: 1,
    max: 10
  },
  cultureScore: {
    type: Number,
    required: [true, 'Brand culture score missing'],
    default: 5,
    min: 1,
    max: 10
  },
  politicalScore: {
    type: String,
    required: [true, 'Brand political score missing'],
    enum: ['L5', 'L4', 'L3', 'L2', 'L1', 'N', 'R1', 'R2', 'R3', 'R4', 'R5']
  },
  parentId: {
    type: ObjectId,
    required: false
  },
  alternativeBrandIds: {
    type: [ObjectId],
    required: false
  }
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
