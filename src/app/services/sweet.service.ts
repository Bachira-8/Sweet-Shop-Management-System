import { Injectable } from '@angular/core';
import { Sweet } from '../models/sweet.model';

@Injectable({
  providedIn: 'root'
})
export class SweetService {

  // constructor() { }

  private sweets: Sweet[] = [
    { id: 1, name: 'Kaju Katli', category: 'Dry Fruit', price: 50, quantity:100 },
    { id: 2, name: 'Rasgulla', category: 'Syrup', price: 25,quantity:500},

  ];

  getSweets(): Sweet[] {
    return this.sweets;
  }

  addSweet(sweet: Sweet) {
    sweet.id = this.sweets.length + 1;
    this.sweets.push(sweet);
  }

}
