"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transactionsRepository_1 = require("../repository/transactionsRepository");
class TransactionsSeervice {
    get() {
        return transactionsRepository_1.default.find({});
    }
    getById(_id) {
        return transactionsRepository_1.default.findById({ _id });
    }
    create(transactions) {
        return transactionsRepository_1.default.create(transactions);
    }
    update(_id, transactions) {
        return transactionsRepository_1.default.findByIdAndUpdate(_id, transactions);
    }
    delete(_id) {
        return transactionsRepository_1.default.findByIdAndDelete(_id);
    }
}
exports.default = new TransactionsSeervice();
