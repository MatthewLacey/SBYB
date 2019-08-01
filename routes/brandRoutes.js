const express = require('express');
const brandController = require('./../controllers/brandController');

const router = express.Router();

router.param('id', brandController.checkID);

router.route('/').get(brandController.getAllBrands);

router.route('/:id').get(brandController.getBrand);

module.exports = router;