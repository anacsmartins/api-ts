"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const transactionsSchema_1 = require("../models/transactionsSchema");
exports.default = mongoose.model('transactions', transactionsSchema_1.default);
