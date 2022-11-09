import { getAllPatients } from "./getAllPatient";
import { getAPatient } from "./getAPatient";
import { createPatient } from "./createPatient";
import { deleteAPatient } from "./deleteAPatient";

export const patientServices = {
    getAllPatients,
    getAPatient,
    createPatient,
    deleteAPatient
}