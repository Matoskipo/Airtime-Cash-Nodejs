// import { json } from 'sequelize';
// import { RegisterUser } from '../../controller/userController';
// import { UserInstance } from '../../models/userModel';

// describe('', () => {
//   beforeAll(() => {
//     UserInstance.findOne = jest.fn().mockResolvedValue(null);
//     UserInstance.create = jest.fn().mockResolvedValue({
//       Name: 'Michelle',
//       UserName: 'Mc',
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

//   const req = {
//     body: {
//       Name: 'Naomi',
//       UserName: 'Nmz',
//       Email: 'nmbn@gmail.com',
//       PhoneNumber: '08112345671',
//       Password: 'naomi1234',
//       confirm_password: 'naomi1234',
//     },
//   };

//   it('creates a new user record in the db', async () => {
//     const response = await RegisterUser(req, res);
//     console.log(response);
//     expect(response).toHaveProperty('message');
//     expect(response).toHaveProperty('data');
//   });
// });
