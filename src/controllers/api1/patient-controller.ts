import { nextTick } from "process";
import { middleware } from "../../config/joi.middleware";
import {patientServices } from '../../services/patient';
import { patientValidators } from '../../validators/patient';
import { BaseController } from "../BaseController";

class PatientController extends BaseController {
    constructor(){
        super('/api/v1/patient');
    }
    initializedRoutes(): void {
       this.router.get(this.path, patientServices.getAllPatients);
       this.router.get(`${this.path}/:id`, patientServices.getAPatient);
       this.router.post(this.path, middleware(patientValidators.createPatientSchema) , patientServices.createPatient);
       this.router.delete(`${this.path}/:id`, patientServices.deleteAPatient);
    }
}

export default PatientController;