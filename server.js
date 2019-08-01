const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

const ObjectId = mongoose.Schema.Types.ObjectId;

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
    required: [true, 'Brand sustainability score missing'],
    default: 0
  },
  cultureScore: {
    type: Number,
    required: [true, 'Brand culture score missing'],
    default: 0
  },
  politicalScore: {
    type: Number,
    required: [true, 'Brand political score missing'],
    default: 0
  },
  parent: {
    type: ObjectId,
    required: false
  },
  subsidiaries: {
    type: [ObjectId],
    required: false
  }
});

const Brand = mongoose.model('Brand', brandSchema);

// const testBrand = new Brand({
//   name: 'Anheuser-Busch Inbev SA',
//   logo:
//     'https://en.wikipedia.org/wiki/Anheuser-Busch_InBev#/media/File:AB_InBev_logo.svg',
//   industry: 'BEVERAGES',
//   num_employees: 182915,
//   sustainabilityScore: 5,
//   cultureScore: 8,
//   politicalScore: 5
// });

// testBrand
//   .save()
//   .then(doc => {
//     console.log(doc);
//   })
//   .catch(err => {
//     console.log('ERROR 💥');
//   });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
