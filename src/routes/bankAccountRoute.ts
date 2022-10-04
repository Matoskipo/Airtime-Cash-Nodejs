import { Router } from 'express';
import { validateCreateBankAccount } from '../middleware/validations';
import { auth } from '../middleware/auth';
import { CreateBankAccount, DeleteBankAccount, AllUserBankAccount } from '../controller/bankAccountController';

const router = Router();

router.post('/add-account', auth, validateCreateBankAccount, CreateBankAccount);
router.get('/all-accounts', auth, AllUserBankAccount);
router.delete('/delete/:accountId', auth, DeleteBankAccount);

export default router;
