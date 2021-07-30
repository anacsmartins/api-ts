import * as mongoose from 'mongoose';
import PayablesSchema from '../models/payablesSchema';


export default mongoose.model('payables', PayablesSchema);