// Importing the Reel model
import { Reel } from './reelModel';

export class SlotMachine {
  reels: Reel[];

  constructor(reels: Reel[]) {
    this.reels = reels;
  }

  // Method to spin the slot machine and get random symbols from each reel
  spin(): string[] {
    return this.reels.map(reel => reel.symbols[Math.floor(Math.random() * reel.symbols.length)]);
  }
}
