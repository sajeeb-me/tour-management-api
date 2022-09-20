const Package = require("../models/package")

exports.getPackagesService = async (filters, queries) => {
    // get all products
    // const package = await Package.find({});

    // get products
    const package = await Package.find(filters).sort(queries.sortBy).select(queries.fields);

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
exports.updatePackageByIdService = async (packageId, updatedBody) => {
    const result = await Package.updateOne({ _id: packageId }, { $set: updatedBody }, { runValidators: true });
    return result;
}