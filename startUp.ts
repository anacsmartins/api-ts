import * as express from "express";
import * as bodyParser from "body-parser";

import DataBase from "./infra/db";
import TransactionsController from "./controller/transactionsController";
import PayablesController from "./controller/payablesController";

class StartUp{
    public app: express.Application;
    private _db: DataBase;
    private bodyParser;

    constructor(){
        this.app = express();

        this._db = new DataBase();
        this._db.createConnection();
        this.middler();
        this.routes();
    }

    middler(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

    routes(){
        this.app.route('/').get((req,res) => {
            res.send({versao: '0.0.1'});
        });

        this.app.route("/api/v1/transactions").get(TransactionsController.get);
        this.app.route("/api/v1/transactions/:id").get(TransactionsController.getById);
        this.app.route("/api/v1/transactions").post(TransactionsController.create);
        this.app.route("/api/v1/transactions/:id").put(TransactionsController.update);
        this.app.route("/api/v1/transactions/:id").delete(TransactionsController.delete);

        this.app.route("/api/v1/payables").get(PayablesController.get);
        this.app.route("/api/v1/payables/:id").get(PayablesController.getById);
        this.app.route("/api/v1/payables").post(PayablesController.create);
        this.app.route("/api/v1/payables/:id").put(PayablesController.update);
        this.app.route("/api/v1/payables/:id").delete(PayablesController.delete);
    }
}

export default new StartUp();