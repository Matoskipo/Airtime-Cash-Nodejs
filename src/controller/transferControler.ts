import express, { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { TransferAirtimeInstance } from '../models/transferModel';
import { UserInstance } from '../models/userModel';
import jwt from 'jsonwebtoken';
import {airtimeNotification} from '../mailer/airtimeTemplate'
import { errorResponse, serverError, successResponse } from '../utils/helperMethods';
import httpStatus from 'http-status';
import mailer from '../mailer/sendMail';
import { Op } from 'sequelize';
const fromUser = process.env.FROM as string;


const JWT_SECRET = process.env.JWT_SECRET || "examples"

interface jwtPayload {
  id:string;
  email:string;
  data:string;
}

export async function transferAirtime(req: Request | any, res: Response) {

  try {
    // generate an id for the transaction
    const transferId = uuidv4();

    //identify who want to sell airtime

    const verified = req.headers.token;

    const token = jwt.verify(verified, JWT_SECRET) as jwtPayload;

    const { id } = token;

    const { network, phoneNumber, amountTransfered, destinationPhoneNumber, amountToReceive,email } = req.body;

    const validatedUser = await UserInstance.findOne({ where: { id} });


    if (!validatedUser) {
      return  errorResponse(res, 'Sorry user does not exist!', httpStatus.NOT_FOUND)

    }

    const transaction = await TransferAirtimeInstance.create({
      id: transferId,
      network,
      phoneNumber,
      amountTransfered,
      userId :id,
      destinationPhoneNumber,
      amountToReceive,
      email
    });
 if(transaction){
    const html = airtimeNotification(amountTransfered,phoneNumber)
      await mailer.sendEmail(fromUser, req.body.email, "airtime transferred successfully", html)
    }

    if (!transaction) {

      return  errorResponse(res, 'Sorry, transaction was not successful!' , httpStatus.NOT_FOUND)

    }
    return successResponse(res, 'Transaction was successfully', httpStatus.OK, transaction);
  } catch (err) {
    console.log(err);
    return serverError(res);
  }
}

export async function AllTransactions(req:Request, res:Response) {
  try {
    const query = req.query.status as unknown as string;
    const page = req.query.page as unknown as number;
    const limit = 15;
    const offset = page === 1 ? 0 : page - 1 * limit;

    const where = query === 'pending' ? {transactionStatus : 'pending'}: {transactionStatus: {[Op.ne]: 'pending'}}

    const transactions = await TransferAirtimeInstance.findAll({where, limit, offset})

    return successResponse(res, 'Transaction fetched successfully', httpStatus.OK, transactions);
  } catch (error) {
    return  serverError(res);
  }
}
