import express from 'express';
const router = express.Router();
import { auth } from '../middleware/auth';
import { AllTransactions, transferAirtime } from '../controller/transferControler';
import { validateTransfer } from '../middleware/validations';


router.post('/transfer', auth, validateTransfer, transferAirtime);
router.get('/all-transactions', auth, AllTransactions);

export default router;
