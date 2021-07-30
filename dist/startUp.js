"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const db_1 = require("./infra/db");
const transactionsController_1 = require("./controller/transactionsController");
const payablesController_1 = require("./controller/payablesController");
class StartUp {
    constructor() {
        this.app = express();
        this._db = new db_1.default();
        this._db.createConnection();
        this.middler();
        this.routes();
    }
    middler() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' });
        });
        this.app.route("/api/v1/transactions").get(transactionsController_1.default.get);
        this.app.route("/api/v1/transactions/:id").get(transactionsController_1.default.getById);
        this.app.route("/api/v1/transactions").post(transactionsController_1.default.create);
        this.app.route("/api/v1/transactions/:id").put(transactionsController_1.default.update);
        this.app.route("/api/v1/transactions/:id").delete(transactionsController_1.default.delete);
        this.app.route("/api/v1/payables").get(payablesController_1.default.get);
        this.app.route("/api/v1/payables/:id").get(payablesController_1.default.getById);
        this.app.route("/api/v1/payables").post(payablesController_1.default.create);
        this.app.route("/api/v1/payables/:id").put(payablesController_1.default.update);
        this.app.route("/api/v1/payables/:id").delete(payablesController_1.default.delete);
    }
}
exports.default = new StartUp();
