const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful'));

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Brand name missing'],
    unique: true
  },
  logo: {
    type: String,
    required: false,
    unique: true
  },
  industry: {
    type: String,
    required: [true, 'Brand industry type missing']
  },
  numEmployees: {
    type: Number,
    required: false
  },
  sustainabilityScore: {
    type: Number,
    required: [true, 'Brand sustainability score missing']
  },
  cultureScore: {
    type: Number,
    required: [true, 'Brand culture score missing']
  },
  politicalScore: {
    type: Number,
    required: [true, 'Brand political score missing']
  },
  parent: {
    type: ObjectID,
    required: false
  },
  subsidiaries: {
    type: [ObjectID],
    required: false
  }
});

const Brand = mongoose.model('Brand', brandSchema);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
