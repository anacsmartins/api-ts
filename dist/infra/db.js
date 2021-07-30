"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class DataBase {
    constructor() {
        this.DB_URL = 'mongodb://link-db/db_portal';
    }
    createConnection() {
        mongoose.connect(this.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    }
}
exports.default = DataBase;
