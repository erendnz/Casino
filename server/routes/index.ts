import { Router } from 'express';
import { spin, getCoins, resetCoins } from '../controllers/slotMachineController';
import { validateSpinRequest } from '../middlewares/validationMiddleware';

const router = Router();

router.post('/spin', validateSpinRequest, spin); //handle the spin request, with validation middleware
router.get('/coins', getCoins); // get current coin balance
router.post('/resetCoins', resetCoins); // reset initial coin balance

export { router as routes };
