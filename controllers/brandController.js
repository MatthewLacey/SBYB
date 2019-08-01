const fs = require('fs');

const brands = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev_data/data/sbyb_companylist.json`)
);

exports.checkID = (req, res, next, val) => {
  console.log(`Brand id is: ${val}`);

  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID'
    });
  }
  next();
};

exports.getAllBrands = (req, res) => {
  console.log(req.requestTime);

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: brands.length,
    data: {
      brands
    }
  });
};

exports.getBrand = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  const brand = brands.find(el => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      brand
    }
  });
};
