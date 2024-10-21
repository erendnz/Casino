import { SlotMachine } from '../models/slotMachineModel';
import { Reel } from '../models/reelModel';
import { calculateSpinResult } from '../utils/spinResult';

// Creating instances of Reel with symbols
const reel1 = new Reel(["cherry", "lemon", "apple", "lemon", "banana", "banana", "lemon", "lemon"]);
const reel2 = new Reel(["lemon", "apple", "lemon", "lemon", "cherry", "apple", "banana", "lemon"]);
const reel3 = new Reel(["lemon", "apple", "lemon", "apple", "cherry", "lemon", "banana", "lemon"]);

const slotMachine = new SlotMachine([reel1, reel2, reel3]);


let coins = 20; // Initial coin balance

// Function to spin the slot machine and calculate the result and coins
export function spinSlotMachine(): { result: string[], coins: number } {
  
  if (coins <= 0) throw new Error('Not enough coins'); // Check if the user has enough coins

  coins -= 1;

  const result = slotMachine.spin();

  const winnings = calculateSpinResult(result);

  coins += winnings;

  return { result, coins };
}

// Function to get the current coin balance
export function getCoinBalance(): number {
  return coins;
}
