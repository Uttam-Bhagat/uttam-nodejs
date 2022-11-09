import * as express from 'express';
import { patientDataSource } from '../../config/app-data-source';
import Patient from '../../entity/patient.entity';

export const getAPatient  = async(request: express.Request, response: express.Response) => {
    const patientId = request.param.id;
    const patientRepository = patientDataSource.getRepository(Patient);
    const patient = await patientRepository.findOneBy({
        id: parseInt(patientId, 10)
    })
    //console.log('patient: ', patientId, parseInt(patientId, 10))
    if(patient){
      response.status(200);
      response.send(patient);
    }
    else{
      response.status(404);
      response.send(null);  
    }
}