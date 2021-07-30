import PayablesRepository from '../repository/payablesRepository';

class PayablesService {
    get() {
        return PayablesRepository.find({});
    }
    getById(_id) {
        return PayablesRepository.findById({_id});
    }

    create(payables) {
        return PayablesRepository.create(payables);
    }

    update(_id, payables) {
        return PayablesRepository.findByIdAndUpdate(_id, payables );
    }

    delete(_id) {
        return PayablesRepository.findByIdAndDelete(_id);
    }

}
export default new PayablesService();