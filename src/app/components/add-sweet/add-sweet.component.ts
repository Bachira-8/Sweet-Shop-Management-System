import { Component } from '@angular/core';
import { SweetService } from '../../services/sweet.service';
import { Sweet } from '../../models/sweet.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-sweet',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-sweet.component.html',
  styleUrls: ['./add-sweet.component.css']
})
export class AddSweetComponent {
  newSweet: Sweet = {
    id: 0,
    name: '',
    category: '',
    price: 0
  };

  constructor(private sweetService: SweetService) {}

  addSweet(): void {
    if (!this.newSweet.name || !this.newSweet.category || !this.newSweet.price) {
      alert("Please fill in all fields.");
      return;
    }

    this.sweetService.addSweet(this.newSweet);
    alert('Sweet added successfully!');
    this.newSweet = { id: 0, name: '', category: '', price: 0 }; // reset form
  }
}
