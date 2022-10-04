import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import {UserInstance} from '../models/userModel'
import {  successResponse} from '../utils/helperMethods';
import {walletAlertNotification} from '../mailer/walletTemplate'
import mailer from '../mailer/sendMail';
const fromUser = process.env.FROM as string;



// interface jwtPayload {
//   email: string;
//   id: string;
//   wallet:number;

// }

export async function updateUserWallet(req:Request|any, res:Response, next:NextFunction){
  try {


    const {amount,email} =req.body

    const data = await UserInstance.findOne({where:{email}})
    const wallet = data?.getDataValue("wallet")
    console.log(`my wallet balance is ${wallet}`)

    console.log(data)

    const updatedWallet = wallet + amount

    if(!data){
      return res.status(httpStatus.NOT_FOUND).json({message:"invalid user"})
    }

    const updatedAmount = await data?.update({
      wallet:updatedWallet
    })
    // send email
    if(updatedAmount){
       const html = walletAlertNotification(updatedWallet, amount);

      await mailer.sendEmail(fromUser, req.body.email,"account successfully credited", html);
    }
   return successResponse(res, 'Account successfully credited', httpStatus.OK, updatedAmount);
  } catch (error) {
 console.log(error)
  }

}
