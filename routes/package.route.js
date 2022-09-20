const express = require('express');
const packageController = require('../controllers/package.controller');
const viewCounts = require('../middlewares/viewCounts');
const router = express.Router();


router.route('/')
    .get(packageController.getPackages)
    .post(packageController.createPackage)

router.route('/:id')
    .get(packageController.getPackageById)
    .patch(packageController.updatePackageById)


module.exports = router;