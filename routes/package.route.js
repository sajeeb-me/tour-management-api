const express = require('express');
const packageController = require('../controllers/package.controller');
const router = express.Router();


router.route('/')
    .get(packageController.getPackages)
    .post(packageController.createPackage)

router.route('/:id')
    .get(packageController.getPackageById)


module.exports = router;