import TransactionsService from '../services/transactionsServices';
import PayablesService from '../services/payablesServices';
import Helper from '../infra/helpers';
import * as HttpStatus from 'http-status';

class TransactionsController {

    get(req, res) {
        TransactionsService.get()
            .then(transactions => Helper.sendResponse(res, HttpStatus.OK, transactions))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        const _id =  req.params.id;
        TransactionsService.getById(_id)
            .then(transactions => Helper.sendResponse(res, HttpStatus.OK, transactions))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    create(req, res) {
        let data = req.body;
        processPayables(data);
        TransactionsService.create(data)
            .then(transactions => Helper.sendResponse(res, HttpStatus.OK, "Transaction performed!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    
    update(req, res) {
        const _id =  req.params.id;
        let transactions = req.body;
        TransactionsService.update(_id, transactions)
            .then(transactions => Helper.sendResponse(res, HttpStatus.OK, "Updated transaction!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    delete(req, res) {
        const _id =  req.params.id;

        TransactionsService.delete(_id)
            .then(() => Helper.sendResponse(res, HttpStatus.OK,`Deleted transaction!`))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

}

function processPayables(transaction) {
    let status = "waiting_funds";
    let subtotal = 0, total = 0, fee = 0
    let value = transaction && transaction.value ? parseFloat(transaction.value) : 0;

    subtotal = value;

    if( transaction.method == "debit_card"){
        status = "paid";
        fee = value > 0 ? ( value * 2 ) / 100 : 0;
        total = value - fee;
    }else{
        fee = value > 0 ? ( value * 4 ) / 100 : 0;
        total = value - fee;
    }
    
    let payable = {
        status: status,
        create_date: new Date().toLocaleDateString(),
        subtotal: subtotal.toFixed(2).toString(),
        discount: fee.toFixed(2).toString(),
        total: total.toFixed(2).toString(),
    };
    
    PayablesService.create(payable);
}

export default new TransactionsController();