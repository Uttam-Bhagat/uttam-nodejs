import { patientDataSource } from "../../../src/config/app-data-source";
import Patient from "../../../src/entity/patient.entity";
import { createPatient } from "../../../src/services/patient/createPatient";

let responseData;
let responseStatus;
const patient:Patient = {
  firstName: "uttam",
  lastName: "kumar",
  email: "uttam.kumar@gmail.com"
}
describe("createPatient is to tested", () => {
    test("createPatient should call", async () => {
      /* const pt = new Patient();
      pt.email = "dattashovodip32@gmail.com" */
      jest.spyOn(patientDataSource.getRepository(Patient), "create").mockReturnValue(new Patient());
      jest.spyOn(patientDataSource.getRepository(Patient), "save").mockResolvedValue(patient);
      await createPatient(mockRequest(), mockResponse());
      expect(responseStatus).toBe(201);
      expect(responseData).toEqual(patient);
    });
})

const interceptor = {
  mockRequest: () => {
    const req: any = {};
    req.body = jest.fn().mockReturnValue({
        "firstName": "Sourav",
        "lastName": "Datta",
        "email": "dattashovodip32@gmail.com"
    });
    req.params = jest.fn().mockReturnValue(req);
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

