import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddSweetComponent } from './add-sweet.component';
import { SweetService } from '../../services/sweet.service';
describe('AddSweetComponent', () => {
  let component: AddSweetComponent;
  let fixture: ComponentFixture<AddSweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSweetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('should call addSweet() and reset form', () => {
    component.newSweet = { id: 0, name: 'Ladoo', category: 'Festive', price: 20 };
    sweetServiceSpy.getSweets.and.returnValue([]);
    component.addSweet();

    expect(sweetServiceSpy.addSweet).toHaveBeenCalledWith(jasmine.objectContaining({
      name: 'Ladoo',
      category: 'Festive',
      price: 20
    }));
    expect(component.newSweet.name).toBe('');
  });
});
