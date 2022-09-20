const express = require('express');
const packageController = require('../controllers/package.controller');
const router = express.Router();


router.route('/')
    .get(packageController.getPackages)


module.exports = router;