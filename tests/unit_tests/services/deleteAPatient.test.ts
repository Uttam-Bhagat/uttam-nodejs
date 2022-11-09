import { DeleteResult } from "typeorm";
import { patientDataSource } from "../../../src/config/app-data-source";
import Patient from "../../../src/entity/patient.entity";
import { deleteAPatient } from "../../../src/services/patient/deleteAPatient";

let responseData;
let responseStatus;
describe("deleteAPatient is to tested", () => {
  test("deleteAPatient should nor effected call", async () => {
      const dr = new DeleteResult();
      dr.affected = 1;
      jest.spyOn(patientDataSource.getRepository(Patient), "delete").mockResolvedValue(dr);
      await deleteAPatient(mockRequest(), mockResponse());
      expect(responseStatus).toBe(200);
      expect(responseData).toEqual(null);
    });
    test("deleteAPatient should call", async () => {
      const dr = new DeleteResult();
      jest.spyOn(patientDataSource.getRepository(Patient), "delete").mockResolvedValue(dr);
      await deleteAPatient(mockRequest(), mockResponse());
      expect(responseStatus).toBe(404);
      expect(responseData).toEqual(null);
    });

})

const interceptor = {
  mockRequest: () => {
    const req: any = {};
    req.body = jest.fn().mockReturnValue(req);
    req.param = jest.fn().mockReturnValue({id: '1'});
    req.app = jest.fn().mockReturnValue(req);
    req.app.get = jest.fn().mockReturnValue(req);
    return req;
  },
  mockResponse: () => {
    const res: any = {};
    res.send = jest.fn().mockImplementation((res) => responseData = res);
    res.status = jest.fn().mockImplementation((res) => responseStatus = res);
    res.json = jest.fn().mockReturnValue(res);
    res.locals = jest.fn().mockReturnValue(res);
    return res;
  },
  //mockNext: () => jest.fn(),
};

const {mockRequest, mockResponse} = interceptor;

