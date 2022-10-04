import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import {UserInstance} from '../models/userModel'
import jwt from 'jsonwebtoken';
const jwtsecret = process.env.JWT_SECRET as string;
interface jwtPayload {
  email: string;
  id: string;
  wallet:number;
  role:string;
}

export async function adminAuth(req: Request | any, res: Response, next: NextFunction) {
  try {
    const token = req.headers.token as string;
    const verifiedToken = jwt.verify(token, jwtsecret) as jwtPayload;
     const {id} = verifiedToken
    console.log(token, verifiedToken);

    const data = await UserInstance.findOne({where:{id}})
    const adminRoute = data?.getDataValue("role")
     if (adminRoute !== 'Admin') {
      res.status(httpStatus.UNAUTHORIZED).json({
        Error: 'Unauthorised user',
      });
      return;
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.FORBIDDEN).json({ Error: 'User is not not authorised' });
  }
}
