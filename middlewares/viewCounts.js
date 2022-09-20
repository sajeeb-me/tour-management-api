let count = 0;

function viewCounts(req, res, next) {
    count++;
    console.log(count);

    next();
}

module.exports = viewCounts;