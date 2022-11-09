import * as express from 'express';
import { patientDataSource  } from '../../config/app-data-source';
import Patient from '../../entity/patient.entity';

export const getAllPatients = async (request: express.Request, response: express.Response) => {
    const patientRepository = patientDataSource.getRepository(Patient);
    const allPatient = await patientRepository.find();
    response.status(200);
    response.send(allPatient);
}