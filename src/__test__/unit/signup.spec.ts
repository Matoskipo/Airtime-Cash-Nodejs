// import { Request } from 'express';
// import { json } from 'sequelize';
// import { RegisterUser } from '../../controller/userController';
// import { UserInstance } from '../../models/userModel';
// // import {createRequest, createResponse, MockRequest, MockResponse,
// // } from 'node-mocks-http'

// describe('', () => {
//   // let request: MockRequest<Request>;
//   // let response: MockResponse<Response>;
//   beforeAll(() => {
//     UserInstance.findOne = jest.fn().mockResolvedValue(null);
//     UserInstance.create = jest.fn().mockResolvedValue({
//       firstName: 'Michelle',
//       UserName: 'Michy',
//     });
//   });

//   const res = {
//     status() {
//       return this;
//     },
//     json(obj: any) {
//       return obj;
//     },
//   };

//   const req = <Request>{
//     body: {
//       firstName: 'Michelle',
//       lastName: 'Aniekwe',
//       userName: 'Michy',
//       email: 'mish@gmail.com',
//       phoneNumber: '08012345678',
//       password: '1234',
//       confirm_password: '1234',
//     },
//   };

//   it('creates a new user record in the db', async () => {
//     const response = await RegisterUser(req, res);
//     console.log(response);
//     expect(response).toHaveProperty('message');
//     expect(response).toHaveProperty('data');
//   });
// });
