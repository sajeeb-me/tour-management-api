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
exports.getPackageById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const result = await packageServices.getPackageByIdService(id);

        if (!result) {
            res.status(400).json({
                status: 'failed',
                message: 'Operation failed.'
            })
        } else {
            res.status(200).json({
                status: 'success',
                message: 'Successfully found the package',
                data: result,
            })
        }


    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Operation failed.',
            error: error.message
        })
    }
}
exports.updatePackageById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;

        const result = await packageServices.updatePackageByIdService(id, body);

        if (!result.acknowledged) {
            res.status(400).json({
                status: 'failed',
                message: 'Operation failed.'
            })
        } else {
            if (!result.modifiedCount) {
                res.status(400).json({
                    status: 'failed',
                    message: 'Can not modified.'
                })
            } else {
                res.status(200).json({
                    status: 'success',
                    message: 'Successfully modified the package',
                    data: result,
                })
            }
        }

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Operation failed.',
            error: error.message
        })
    }
}