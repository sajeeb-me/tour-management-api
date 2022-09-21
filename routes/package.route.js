const express = require('express');
const packageController = require('../controllers/package.controller');
const router = express.Router();


router.route('/cheapest')
    .get(packageController.getCheapestPackages)

router.route('/trending')
    .get(packageController.getTrendingPackages)

router.route('/')
    .get(packageController.getPackages)
    .post(packageController.createPackage)

router.route('/:id')
    .get(packageController.getPackageById)
    .patch(packageController.updatePackageById)


module.exports = router;