import { middleware } from "../../../src/config/joi.middleware";
import { patientValidators } from '../../../src/validators/patient';
let responseData;
let responseStatus;
describe("middleware test...", () => {
    test("testing...", async () => {
      const res = await middleware(patientValidators.createPatientSchema);
      console.log("res ", res);
        //expect(responseStatus).toBe(200);
        //expect(responseData).toEqual(patientList);
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
