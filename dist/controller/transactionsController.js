"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transactionsServices_1 = require("../services/transactionsServices");
const payablesServices_1 = require("../services/payablesServices");
const helpers_1 = require("../infra/helpers");
const HttpStatus = require("http-status");
class TransactionsController {
    get(req, res) {
        transactionsServices_1.default.get()
            .then(transactions => helpers_1.default.sendResponse(res, HttpStatus.OK, transactions))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        transactionsServices_1.default.getById(_id)
            .then(transactions => helpers_1.default.sendResponse(res, HttpStatus.OK, transactions))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        let data = req.body;
        processPayables(data);
        transactionsServices_1.default.create(data)
            .then(transactions => helpers_1.default.sendResponse(res, HttpStatus.OK, "Transaction performed!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let transactions = req.body;
        transactionsServices_1.default.update(_id, transactions)
            .then(transactions => helpers_1.default.sendResponse(res, HttpStatus.OK, "Updated transaction!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        transactionsServices_1.default.delete(_id)
            .then(() => helpers_1.default.sendResponse(res, HttpStatus.OK, `Deleted transaction!`))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}
function processPayables(transaction) {
    let status = "waiting_funds";
    let subtotal = 0, total = 0, fee = 0;
    let value = transaction && transaction.value ? parseFloat(transaction.value) : 0;
    subtotal = value;
    if (transaction.method == "debit_card") {
        status = "paid";
        fee = value > 0 ? (value * 2) / 100 : 0;
        total = value - fee;
    }
    else {
        fee = value > 0 ? (value * 4) / 100 : 0;
        total = value - fee;
    }
    let payable = {
        status: status,
        create_date: new Date().toLocaleDateString(),
        subtotal: subtotal.toFixed(2).toString(),
        discount: fee.toFixed(2).toString(),
        total: total.toFixed(2).toString(),
    };
    payablesServices_1.default.create(payable);
}
exports.default = new TransactionsController();
