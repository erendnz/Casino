import { Request, Response } from 'express';
import { spinSlotMachine, getCoinBalance } from '../services/slotMachineService';

// Controller function to handle the spin request
export function spin(req: Request, res: Response): void {
  try {
    const { result, coins } = spinSlotMachine();
    res.json({ result, coins });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    } else {
      res.status(400).send('An unknown error occurred.');
    }
  }
}

// Controller function to get the current coin balance
export function getCoins(req: Request, res: Response): void {
  try {
    const coins = getCoinBalance();
    res.json({ coins });
  } catch (error) {
    res.status(400).send('Unable to fetch coins.');
  }
}

// Controller function to get the initial coin balance
export function getCoinsInitial(req: Request, res: Response): void {
  try {
    const coins = 20;
    res.json({ coins });
  } catch (error) {
    res.status(400).send('Unable to fetch coins.');
  }
}
