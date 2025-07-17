import { Component } from '@angular/core';
import { Sweet } from '../../models/sweet.model';
import { SweetService } from '../../services/sweet.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sweetlist',
  imports: [CommonModule],
  templateUrl: './sweet-list.component.html',
  styleUrl: './sweet-list.component.css'
})
export class SweetListComponent {
   sweets: Sweet[] = [];

  constructor(private sweetService: SweetService) {}

  ngOnInit(): void {
    this.sweets = this.sweetService.getSweets();
  }
}
