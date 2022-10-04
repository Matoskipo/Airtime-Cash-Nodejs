import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { BankAccountInstance } from '../models/bankAccountModel';
import { errorResponse, serverError, successResponse, successResponseLogin } from '../utils/helperMethods';
import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';

interface jwtPayload {
  email: string;
  id: string;
}

const JWT_SECRET = process.env.JWT_SECRET as string;

export const CreateBankAccount = async (req: Request | any, res: Response): Promise<unknown> => {
  const accountId = uuidv4();

  try {
    const verified = req.headers.token;

    const token = jwt.verify(verified, JWT_SECRET) as jwtPayload;

    const { id } = token;

    const duplicateAccountNumber = await BankAccountInstance.findOne({
      where: { accountNumber: req.body.accountNumber },
    });
    if (duplicateAccountNumber) {
      return errorResponse(res, 'Account number already exists', httpStatus.CONFLICT);
    }

    let bankAccount = { userId: id, accountId, ...req.body };

    const record = await BankAccountInstance.create(bankAccount);
    return successResponse(res, 'Account created successfully', httpStatus.CREATED, record);
  } catch (error) {
    return serverError(res);
  }
};

export async function AllUserBankAccount(req: Request | any, res: Response) {
  try {
    const verified = req.headers.token;

    const token = jwt.verify(verified, JWT_SECRET) as jwtPayload;

    const { id } = token;

    const limit = req.query?.limit as number | undefined;
    const offset = req.query?.offset as number | undefined;
    const record = await BankAccountInstance.findAndCountAll({ where: { userId: id }, limit, offset });
    if (!record) {
      return errorResponse(
        res,
        `Can not find bank accounts. Kindly add your Bank details to get started `,
        httpStatus.NOT_FOUND,
      );
    }
    return successResponse(res, 'You have successfully fetch all bank accounts', httpStatus.OK, {
      count: record.count,
      record: record.rows,
    });
  } catch (error) {
    serverError(res);
  }
}

export async function DeleteBankAccount(req: Request, res: Response) {
  try {
    const token = req.headers.token as string;

    const { id } = jwt.verify(token, JWT_SECRET) as jwtPayload;

    const { accountId } = req.params;

    const record = await BankAccountInstance.findOne({ where: { accountId, userId: id } });
    if (!record) {
      return errorResponse(
        res,
        `Can not find bank accounts. Kindly add your Bank details to get started `,
        httpStatus.NOT_FOUND,
      );
    }
    const deletedRecord = await record.destroy();

    return successResponse(res, 'Successfully deleted bank account', httpStatus.OK, {});
  } catch (err) {
    serverError(res);
  }
}
