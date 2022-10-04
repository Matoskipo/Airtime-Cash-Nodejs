// import request from 'supertest';
// import createServer from '../../utils/server';

// const app = createServer();

// describe('users signup route', () => {
//   it('should signup user', async () => {
//     const res = await request(app).post('/users/signup').send({
//       firstName: 'Michelle',
//       lastName: 'Aniekwe',
//       userName: 'Michy',
//       email: 'mish@gmail.com',
//       phoneNumber: '08012345678',
//       password: '1234',
//       confirm_password: '1234',
//     });
//     expect(res.status).toEqual(201);
//     expect(res.body.data).toHaveProperty('firstName');
//     expect(res.body.data.Name).toEqual('Michelle');
//   });
//   it('should return 400 when Name is not passed', async () => {
//     const res = await request(app).post('/users/signup').send({
//       username: 'Michy',
//       email: 'mish@gmail.com',
//       phoneNumber: '08012345678',
//       password: '1234',
//     });
//     expect(res.status).toEqual(400);
//   });
// });
