import { Router } from 'express';
import { spin, getCoins } from '../controllers/slotMachineController';
import { validateSpinRequest } from '../middlewares/validationMiddleware';

const router = Router();

router.post('/spin', validateSpinRequest, spin); //handle the spin request, with validation middleware
router.get('/coins', getCoins);

export { router as routes };
