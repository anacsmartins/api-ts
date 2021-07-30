"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const payablesRepository_1 = require("../repository/payablesRepository");
class PayablesService {
    get() {
        return payablesRepository_1.default.find({});
    }
    getById(_id) {
        return payablesRepository_1.default.findById({ _id });
    }
    create(payables) {
        return payablesRepository_1.default.create(payables);
    }
    update(_id, payables) {
        return payablesRepository_1.default.findByIdAndUpdate(_id, payables);
    }
    delete(_id) {
        return payablesRepository_1.default.findByIdAndDelete(_id);
    }
}
exports.default = new PayablesService();
