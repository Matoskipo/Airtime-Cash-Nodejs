import { DataTypes, Model } from 'sequelize';
import db from '../config/db.config'

interface TransferAirtimeAttribute {
  id: string;
  network: string;
  phoneNumber: number;
  amountTransfered: number;
  userId: string;
  transactionStatus?: boolean;
  amountToReceive: number;
  destinationPhoneNumber: number;
  email:string;
}

export class TransferAirtimeInstance extends Model<TransferAirtimeAttribute> {}

TransferAirtimeInstance.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    network: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    amountTransfered: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    },
    transactionStatus: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'pending',
    },
    amountToReceive: {
      type: DataTypes.NUMBER,
      allowNull: false,
  },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  destinationPhoneNumber: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },},

  {
    sequelize: db,
    tableName: 'transferAirtime',
  },

);
