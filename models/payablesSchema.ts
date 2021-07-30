import * as mongoose from 'mongoose';

const PayablesSchema = new mongoose.Schema({
    status: {type:String},
    create_date: {type:String},
    discount: {type:String},
    subtotal: {type:String},
    total: {type:String}
 });

export default PayablesSchema;