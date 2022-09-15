var express = require('express');
var spendingController = require('./controllers/spendingController.js');
var router = express.Router();

router.get("/spendings", (req, res) => {
    res.send(spendingController.spendingsList(req, res));
});

router.post("/spendings", (req, res) => {
    res.send(spendingController.addSpending(req, res));
});


module.exports = router;
