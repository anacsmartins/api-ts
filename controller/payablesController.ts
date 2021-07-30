import PayablesService from '../services/payablesServices';
import Helper from '../infra/helpers';
import * as HttpStatus from 'http-status';

class PayablesController {

    get(req, res) {
        PayablesService.get()
            .then(payables => Helper.sendResponse(res, HttpStatus.OK, payables))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        const _id =  req.params.id;
        PayablesService.getById(_id)
            .then(payables => Helper.sendResponse(res, HttpStatus.OK, payables))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    create(req, res) {
        let vm = req.body;
        PayablesService.create(vm)
            .then(payables => Helper.sendResponse(res, HttpStatus.OK, "Payable performed!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    
    update(req, res) {
        const _id =  req.params.id;
        let payables = req.body;
        PayablesService.update(_id, payables)
            .then(payables => Helper.sendResponse(res, HttpStatus.OK, "Updated payable!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    delete(req, res) {
        const _id =  req.params.id;

        PayablesService.delete(_id)
            .then(() => Helper.sendResponse(res, HttpStatus.OK,`Deleted transaction!`))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

}
export default new PayablesController();