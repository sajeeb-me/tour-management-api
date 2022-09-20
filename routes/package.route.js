const express = require('express');
const packageController = require('../controllers/package.controller');
const router = express.Router();


router.route('/')
    .get(packageController.getPackages)
    .post(packageController.createPackage)


module.exports = router;