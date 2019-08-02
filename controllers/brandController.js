const Brand = require('./../models/brandModel');

exports.getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.find();

    res.status(200).json({
      status: 'success',
      results: brands.length,
      data: {
        brands
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'failure',
      message: err
    });
  }
};

exports.getBrand = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        brand
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'failure',
      message: err
    });
  }
};

exports.createBrand = async (req, res) => {
  try {
    const newBrand = await Brand.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        brand: newBrand
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'failure',
      message: err
    });
  }
};

exports.updateBrand = async (req, res) => {
  try {
    const brand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: 'success',
      data: {
        brand
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'failure',
      message: err
    });
  }
};

exports.deleteBrand = async (req, res) => {
  try {
    await Brand.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'succes',
      data: null
    });
  } catch (err) {
    res.status(400).json({
      status: 'failure',
      message: err
    });
  }
};
