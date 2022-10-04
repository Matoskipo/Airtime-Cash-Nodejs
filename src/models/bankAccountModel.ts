import { DataTypes, Model } from 'sequelize';
import db from '../config/db.config';

export interface BankAccountAttributes {
  userId?: string;
  accountId: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  wallet?: number;
}

export class BankAccountInstance extends Model<BankAccountAttributes> {}

BankAccountInstance.init(
  {
    userId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: true,
    },
    accountId: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    bankName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Bank name is required',
        },
        notEmpty: {
          msg: 'Provide bank name',
        },
      },
    },
    accountName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Account name is required',
        },
        notEmpty: {
          msg: 'Provide account name',
        },
      },
    },
    accountNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'Account Number is required',
        },
        isNumeric: {
          msg: 'Please provide a valid account number',
        },
      },
    },
    wallet: {
      type: DataTypes.NUMBER,
      allowNull: true,
      defaultValue: 0,
    },
  },
  {
    sequelize: db,
    tableName: 'BankAccount',
  },
);
