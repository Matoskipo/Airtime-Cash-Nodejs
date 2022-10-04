// import supertest from 'supertest';
// import createServer from '../../utils/server';
// import * as userController from '../../controller/userController';
// import { v4 as uuidv4 } from 'uuid';

// const app = createServer();

// const userId = uuidv4();

// const userPayload: Record<string, any> = {
//   id: userId,
//   firstName: 'Jane',
//   lastName: 'Doe',
//   userName: 'JohnDoe123',
//   email: 'test@example.com',
//   phoneNumber: '08000000000',
//   password: expect.any(String),
//   confirmationCode: expect.any(String),
//   // updatedAt: expect.any(String),
//   // createdAt: expect.any(String),
// };

// const userInput = {
//   firstName: 'Jane',
//   lastName: 'Doe',
//   userName: 'JohnDoe123',
//   email: 'test@example.com',
//   phoneNumber: '08000000000',
//   password: 'Password123',
//   confirm_password: 'Password123',
// };

// describe('Sample Test', () => {
//   it('should test that true === true', () => {
//     expect(true).toBe(true);
//   });
// });

// describe('user', () => {
//   describe('user registration', () => {
//     describe('given the username and password are valid', () => {
//       it('should return the user payload', async () => {
//         const createUserMock = jest
//           .spyOn(userController, 'RegisterUser') // @ts-ignore
//           .mockReturnValueOnce(userPayload);

//         const { statusCode, body } = await supertest(app).post('/api-v1/users/signup').send(userInput);
//         console.log(statusCode, body);

//         expect(statusCode).toBe(201);

//         expect(body).toEqual(userPayload);

//         expect(createUserMock).toHaveBeenCalledWith(userInput);
//       });
//     });

//     describe('given the passwords do not match', () => {
//       it('should return a 400', () => {});
//     });

//     describe('given the user service throws', () => {
//       it('should return a 409 error', () => {});
//     });

//     describe('create user session', () => {
//       describe('given the username and the password are valid', () => {
//         it('it should return a signed accessToken and a refresh token', () => {});
//       });
//     });
//   });
// });

// // describe('user', () => {
// //   describe('test user login endpoint', () => {
// //     describe('given user does not exist', () => {
// //       it('should return a 404', async () => {
// //         const userId = 'user-1234';

// //         await supertest(app).post('/api-v1/users/login').expect(400);
// //         // expect(true).toBe(true);
// //       });
// //     });

// //     describe('given the user is not loged in', () => {
// //       it('should return a 403', async () => {
// //         const {} = await supertest(app).post('/api-v1/users/login');

// //         expect(STATUS_CODES).toBe(403);
// //       });
// //     });
// //   });
// // });

// // describe('Test user login endpoint, POST', () => {
// //   it('should login user', async () => {
// //     const res = await request(app).post('/api-v1/users/login').send({
// //       Email: 'nm8@gmail.com',
// //       Password: 'naomi1234',
// //     });
// //     expect(res.status).toEqual(201);
// //     expect(res.body.data).toHaveProperty('Email');
// //     expect(res.body.data.Name).toEqual('naomi1234');
// //   });

// //   it('should login user', async () => {
// //     const res = await request(app).post('/api-v1/users/login').send({
// //       Email: 'nm8@gmail.com',
// //       Password: 'naomi1234',
// //     });
// //     expect(res.status).toEqual(201);
// //     expect(res.body.data).toHaveProperty('Email');
// //     expect(res.body.data.Name).toEqual('naomi1234');
// //   });
// //   it('should return 400 when Name is not passed', async () => {
// //     const res = await request(app).post('/users/signup').send({
// //       Email: 'nm@gmail.com',
// //       Password: 'naomi1234',
// //     });
// //     expect(res.status).toEqual(400);
// //   });
// // });
