import { Component } from '@angular/core';
import { AddSweetComponent } from './components/add-sweet/add-sweet.component';
import { CommonModule } from '@angular/common';
import { SweetListComponent } from "./components/sweet-list/sweet-list.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, AddSweetComponent, SweetListComponent, NavbarComponent]
})
export class AppComponent {
  showForm = false;

  sweets = [
    { name: 'Kaju Katli', category: 'Dry Fruit', price: 50, quantity:500 },
    { name: 'Rasgulla', category: 'Syrup', price: 25, quantity: 100 }
  ];
}
