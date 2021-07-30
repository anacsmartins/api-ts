import * as  mongoose from 'mongoose';

class DataBase{
    private DB_URL = 'mongodb://link-db/db_portal';

    createConnection(){
        mongoose.connect(this.DB_URL, { useNewUrlParser: true , useUnifiedTopology: true });
    }
}

export default DataBase;