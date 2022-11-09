import * as express from 'express';
import { patientDataSource } from '../../config/app-data-source';
import Patient from '../../entity/patient.entity';

export const createPatient  = async(request: express.Request, response: express.Response) => {
    const patientCreateRequest = request.body;
    const patientRepository = patientDataSource.getRepository(Patient);
    const newPatientCreated = patientRepository.create({...patientCreateRequest});
    const createdPatient = await patientRepository.save(newPatientCreated);
    response.status(201);
    response.send(createdPatient);
}