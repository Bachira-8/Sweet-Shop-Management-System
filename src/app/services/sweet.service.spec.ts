import { TestBed } from '@angular/core/testing';

import { SweetService } from './sweet.service';
import { Sweet } from '../models/sweet.model';

describe('SweetService', () => {
  let service: SweetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SweetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of sweets', () => {
    const sweets = service.getSweets();
    expect(sweets.length).toBeGreaterThan(0);
    expect(sweets[0].name).toBe('Kaju Katli');
  });

  it('should add a new sweet to the list', () => {
    const newSweet: Sweet = {
      id: 3,
      name: 'Gulab Jamun',
      category: 'Milk',
      price: 35,
      quantity: 150,
    }

    service.addSweet(newSweet);

    const sweets = service.getSweets();
    expect(sweets.length).toBe(3);
    expect(sweets[2].name).toBe('Gulab Jamun');

  });  

});
