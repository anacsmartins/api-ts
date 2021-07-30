"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const PayablesSchema = new mongoose.Schema({
    status: { type: String },
    create_date: { type: String },
    discount: { type: String },
    subtotal: { type: String },
    total: { type: String }
});
exports.default = PayablesSchema;
