import { Request, Response, NextFunction } from 'express';

// Middleware function to validate the spin request
const validateSpinRequest = (req: Request, res: Response, next: NextFunction): void => {
  const { bet } = req.body;

  // Check if bet is a positive number
  if (bet <= 0) {
    res.status(400).json({ error: 'Bet must be a positive number' });
    return;
  }

  next();
};

export { validateSpinRequest };
