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