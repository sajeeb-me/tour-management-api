const packageServices = require("../services/package.service")


exports.getPackages = async (req, res, next) => {
    try {
        const packages = await packageServices.getPackagesService();

        res.status(200).json({
            status: "success",
            message: "Successfully found the packages",
            data: packages
        })

    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Can't get the data",
            error: error.message
        })
    }
}
exports.createPackage = async (req, res, next) => {
    try {
        const result = await packageServices.createPackageService(req.body);

        res.status(200).json({
            status: 'success',
            message: 'Data inserted successfully',
            data: result,
        })

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Operation failed.',
            error: error.message
        })
    }
}