import { patientDataSource } from "../../../src/config/app-data-source";
import Patient from "../../../src/entity/patient.entity";
import { getAPatient } from "../../../src/services/patient/getAPatient";

let responseData;
let responseStatus;
describe("getAPatient is to tested", () => {
    test("getAPatient should call", async () => {
      jest.spyOn(patientDataSource.getRepository(Patient), "findOneBy").mockResolvedValue(new Patient());
      await getAPatient(mockRequest(), mockResponse());
      //console.log("responseData ", responseData, ", status: ", responseStatus);
      expect(responseStatus).toBe(200);
      expect(responseData).toEqual(new Patient());
    });

    test("getAPatient should nor effected call", async () => {
        jest.spyOn(patientDataSource.getRepository(Patient), "findOneBy").mockResolvedValue(null);
        await getAPatient(mockRequest(), mockResponse());
        //console.log("responseData>>>> ", responseData, ", status: ", responseStatus);
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

