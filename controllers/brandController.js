const Brand = require('./../models/brandModel');

exports.getAllBrands = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime
    // results: brands.length,
    // data: {
    //   brands
    // }
  });
};

exports.getBrand = (req, res) => {
  // const id = req.params.id * 1;

  // const brand = brands.find(el => el.id === id);

  res.status(200).json({
    status: 'success'
    // data: {
    //   brand
    // }
  });
};
