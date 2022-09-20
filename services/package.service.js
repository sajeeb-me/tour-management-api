const Package = require("../models/package")

exports.getPackagesService = async () => {
    const package = await Package.find({});
    return package;
}
exports.createPackageService = async (data) => {
    const result = await Package.create(data);
    return result;
}
exports.getPackageByIdService = async (packageId) => {
    const result = await Package.findOne({ _id: packageId });
    return result;
}