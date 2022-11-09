import 'reflect-metadata';
import App from './app';
import { controllers } from './src/controllers';
const {port, environment} = require('./config/environment-config');
import { patientDataSource  } from './src/config/app-data-source';
patientDataSource.initialize().then(() => {console.log("Data source has been initialized")}).catch(() => {
    console.log("Error during Data source initialized")
})
const app = new App(controllers, port,environment);
app.listen();
app.initializeDataSource();
export default app;
