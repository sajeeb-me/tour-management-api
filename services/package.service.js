const Package = require("../models/package")

exports.getPackagesService = async (filters, queries) => {
    // get all products
    // const package = await Package.find({});

    // get products
    const package = await Package.find(filters)
        .skip(queries.skip)
        .limit(queries.limit)
        .select(queries.fields)
        .sort(queries.sortBy);
    const total = await Package.countDocuments(filters)
    return { package, total };
}
exports.createPackageService = async (data) => {
    const result = await Package.create(data);
    return result;
}
exports.getPackageByIdService = async (packageId) => {
    const result = await Package.findOneAndUpdate({ _id: packageId }, { $inc: { totalViews: 1 } }, { new: true });
    return result;
}
exports.updatePackageByIdService = async (packageId, updatedBody) => {
    const result = await Package.updateOne({ _id: packageId }, { $set: updatedBody }, { runValidators: true });
    return result;
}
exports.getTrendingPackagesServices = async () => {
    const result = await Package.find().sort('-totalViews').limit(3);
    return result;
}
exports.getCheapestPackagesService = async () => {
    const result = await Package.find().sort('price').limit(3);
    return result;
}