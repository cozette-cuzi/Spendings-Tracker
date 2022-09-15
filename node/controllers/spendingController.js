const spendings = [];


exports.spendingsList = (req, res) => {
    let modifiedSpendings = spendings;
    console.log(req.query);
    if (req.query.orderBy) {
        let orderBy = req.query.orderBy;
        let asc = 1;
        if (orderBy[0] == '-') {
            asc = -1;
            orderBy = orderBy.substring(1);
        }
        if (orderBy == "date") {
            modifiedSpendings.sort((a, b) => (a.spent_at > b.spent_at) ? asc * 1 : asc * -1);
        } else if (orderBy == "amount") {
            modifiedSpendings.sort((a, b) => asc * (a.amount - b.amount));
        }
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

    return spendings;
};