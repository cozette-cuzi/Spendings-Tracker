const spendings = [];


exports.spendingsList = (req, res) => {
    let modifiedSpendings = spendings;
    if (req.query.orderBy) {
        modifiedSpendings = orderArrayBy(modifiedSpendings, req.query.orderBy);
    }

    if (req.query.filter) {
        modifiedSpendings = modifiedSpendings.filter(item => item.currency == req.query.filter);
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


function orderArrayBy(arr, type) {
    let asc = 1;
    if (type[0] == '-') {
        asc = -1;
        type = type.substring(1);
    }
    if (type === "date") {
        arr.sort((a, b) => (a.spent_at > b.spent_at) ? asc * 1 : asc * -1);
    } else if (type === "amount") {
        arr.sort((a, b) => asc * (a.amount - b.amount));
    }

    return arr;
}