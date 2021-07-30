"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const payablesSchema_1 = require("../models/payablesSchema");
exports.default = mongoose.model('payables', payablesSchema_1.default);
