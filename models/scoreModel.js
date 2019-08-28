const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const scoreSchema = new mongoose.Schema({
  sustainabilityScore: {
    type: Number,
    min: 1,
    max: 5
  },
  cultureScore: {
    type: Number,
    min: 1,
    max: 5
  },
  politicalScore: {
    type: String,
    enum: ['L5', 'L4', 'L3', 'L2', 'L1', 'N', 'R1', 'R2', 'R3', 'R4', 'R5']
  },
  comments: [
    {
      text: String
    }
  ]
});

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;
