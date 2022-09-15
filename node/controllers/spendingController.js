const spendings = [];


exports.spendingsList = (req, res) => {
    let modifiedSpendings = spendings;
    if (req.query.orderBy && req.query.orderBy == "date") {
        modifiedSpendings.sort((a, b) => (a.spent_at > b.spent_at) ? 1 : -1);
    } else if (req.query.orderBy && req.query.orderBy == "amount") {
        modifiedSpendings.sort((a, b) => a.amount - b.amount);
    }

    if (req.query.filter) {
        console.log(req.query.filter);
        modifiedSpendings = spendings.filter(item => item.currency == req.query.filter);
    }
    return modifiedSpendings;
};


exports.addSpending = (req, res) => {
    spendings.push({
        description: req.body.description,
        amount: req.body.amount,
        spent_at: new Date().toISOString(),
        currency: req.body.currency
    });

    return true;
};