"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const payablesServices_1 = require("../services/payablesServices");
const helpers_1 = require("../infra/helpers");
const HttpStatus = require("http-status");
class PayablesController {
    get(req, res) {
        payablesServices_1.default.get()
            .then(payables => helpers_1.default.sendResponse(res, HttpStatus.OK, payables))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        payablesServices_1.default.getById(_id)
            .then(payables => helpers_1.default.sendResponse(res, HttpStatus.OK, payables))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        let vm = req.body;
        payablesServices_1.default.create(vm)
            .then(payables => helpers_1.default.sendResponse(res, HttpStatus.OK, "Payable performed!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let payables = req.body;
        payablesServices_1.default.update(_id, payables)
            .then(payables => helpers_1.default.sendResponse(res, HttpStatus.OK, "Updated payable!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        payablesServices_1.default.delete(_id)
            .then(() => helpers_1.default.sendResponse(res, HttpStatus.OK, `Deleted transaction!`))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new PayablesController();
