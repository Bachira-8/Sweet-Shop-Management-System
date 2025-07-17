import { Component } from '@angular/core';
import { AddSweetComponent } from './components/add-sweet/add-sweet.component';
import { CommonModule } from '@angular/common';
import { SweetListComponent } from "./components/sweet-list/sweet-list.component";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, AddSweetComponent, SweetListComponent]
})
export class AppComponent {
  showForm = false;

  sweets = [
    { name: 'Kaju Katli', category: 'Dry Fruit', price: 50 },
    { name: 'Rasgulla', category: 'Syrup', price: 25 }
  ];
}
