import express from 'express';
import * as bodyParser from 'body-parser';
import morgan from 'morgan';
import { BaseController } from './src/controllers/BaseController';
import { patientDataSource  } from './src/config/app-data-source';
class App {
    public app: express.Application;
    public port: number;
    public environment: string;
    private appServer: any;
    constructor(controllers: BaseController[], port: number, environment: string){
        this.app = express();
        this.port = port;
        this.environment = environment;
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }
    initializeControllers(controllers: BaseController[]) {
        controllers.forEach((controllers: BaseController)=> {
            this.app.use('/', controllers.router)
        });
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
        if(this.isLowerEnvironment(this.environment)){
            this.app.use(morgan('dev'))
        }
    }

    private isLowerEnvironment(environment: string ): boolean {
        if(environment && environment === 'dev')
            return true;
        return false;
    }
    
    public listen() {
        this.appServer = this.app.listen(this.port, () => {
            console.log(`App listening on port ${this.port}`)
        })
    }

    public initializeDataSource() {
        if(this.environment && this.environment !== 'test'){
            patientDataSource.initialize().then(() => {console.log("Data source has been initialized")}).catch(() => {
                console.log("Error during Data source initialized")
            })
        }
    }

    public shutDown() {
        console.log('Received kill signal, shutting down gracefully');
        this.appServer.close();
    }

}

export default App;
