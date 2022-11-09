import * as express from 'express';
import { DeleteResult } from 'typeorm';
import { patientDataSource } from '../../config/app-data-source';
import Patient from '../../entity/patient.entity';

export const deleteAPatient  = async(request: express.Request, response: express.Response) => {
    const patientId = request.param.id;
    const patientRepository = patientDataSource.getRepository(Patient);
    const patientDeleted: DeleteResult = await patientRepository.delete(parseInt(patientId, 10));
    //console.log('patient: ', patientId, parseInt(patientId, 10))
    if(patientDeleted.affected && patientDeleted.affected > 0){
        response.status(200);
        response.send(null);
    }
    else {
        response.status(404);
        response.send(null);  

    }
}