import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddSweetComponent } from './add-sweet.component';
import { SweetService } from '../../services/sweet.service';
import { FormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';

describe('AddSweetComponent', () => {
  let component: AddSweetComponent;
  let fixture: ComponentFixture<AddSweetComponent>;
  let sweetServiceSpy: jasmine.SpyObj<SweetService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('SweetService', ['addSweet']);

    await TestBed.configureTestingModule({
      imports: [AddSweetComponent],
      providers: [
        importProvidersFrom(CommonModule, FormsModule),
        { provide: SweetService, useValue: spy }
      ]
    }).compileComponents();

    spyOn(window, 'alert');

    fixture = TestBed.createComponent(AddSweetComponent);
    component = fixture.componentInstance;
    sweetServiceSpy = TestBed.inject(SweetService) as jasmine.SpyObj<SweetService>;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call addSweet() and reset the form', () => {
    component.newSweet = {
      id: 0,
      name: 'Barfi',
      category: 'Traditional',
      price: 40
    };

    component.addSweet();

    expect(sweetServiceSpy.addSweet).toHaveBeenCalledWith(jasmine.objectContaining({
      name: 'Barfi',
      category: 'Traditional',
      price: 40
    }));

    expect(component.newSweet.name).toBe('');
    expect(component.newSweet.price).toBe(0);
  });
});
