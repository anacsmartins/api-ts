import * as mongoose from 'mongoose';
import TransactionsSchema from '../models/transactionsSchema';


export default mongoose.model('transactions', TransactionsSchema);