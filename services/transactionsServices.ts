import TransactionsRepository from '../repository/transactionsRepository';

class TransactionsSeervice {
    get() {
        return TransactionsRepository.find({});
    }
    getById(_id) {
        return TransactionsRepository.findById({_id});
    }

    create(transactions) {
        return TransactionsRepository.create(transactions);
    }

    update(_id, transactions) {
        return TransactionsRepository.findByIdAndUpdate(_id, transactions );
    }

    delete(_id) {
        return TransactionsRepository.findByIdAndDelete(_id);
    }

}
export default new TransactionsSeervice();