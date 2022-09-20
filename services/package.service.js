const Package = require("../models/package")

exports.getPackagesService = async () => {
    const package = await Package.find({});
    return package;
}