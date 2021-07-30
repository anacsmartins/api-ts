"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const TransactionsSchema = new mongoose.Schema({
    value: { type: String },
    description: { type: String },
    method: { type: String },
    cardNumber: { type: String },
    cardHolderName: { type: String },
    cardExpirationDate: { type: String },
    cardCvv: { type: String },
    id: { type: String }
});
exports.default = TransactionsSchema;
