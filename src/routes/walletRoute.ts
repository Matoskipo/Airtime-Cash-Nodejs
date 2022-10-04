import {Router} from 'express'
import {updateUserWallet} from '../controller/walletController'
import {adminAuth} from '../middleware/adminAuth'


const router = Router();

router.patch('/update-wallet',adminAuth, updateUserWallet)

export default router
