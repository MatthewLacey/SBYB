const express = require('express');
const brandController = require('./../controllers/brandController');

const router = express.Router();

router
  .route('/')
  .get(brandController.getAllBrands)
  .post(brandController.createBrand);

router
  .route('/:id')
  .get(brandController.getBrand)
  .patch(brandController.updateBrand);

module.exports = router;
