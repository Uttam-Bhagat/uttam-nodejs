import { patientDataSource } from "../../../src/config/app-data-source";
import Patient from "../../../src/entity/patient.entity";
import { getAllPatients } from "../../../src/services/patient/getAllPatient";

let responseData;
let responseStatus;
const patientList:Patient[] = [{
  firstName: "uttam",
  lastName: "kumar",
  email: "uttam.kumar@gmail.com"
}]
describe("getAllPatients is to tested", () => {
    beforeAll(() => {
      jest.spyOn(patientDataSource.getRepository(Patient), "find").mockResolvedValue(patientList);
    })
    test("getAllPatients should call", async () => {
      await getAllPatients(mockRequest(), mockResponse());
      //console.log("responseData ", responseData, ", status: ", responseStatus);
        expect(responseStatus).toBe(200);
        expect(responseData).toEqual(patientList);
    });
})

const interceptor = {
  mockRequest: () => {
    const req: any = {};
    req.body = jest.fn().mockReturnValue(req);
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