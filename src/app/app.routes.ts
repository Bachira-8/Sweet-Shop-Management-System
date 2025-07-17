import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SweetListComponent } from './components/sweet-list/sweet-list.component';
import { AddSweetComponent } from './components/add-sweet/add-sweet.component';

export const routes: Routes = [
    { path: '', component: SweetListComponent },
  { path: 'add', component: AddSweetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }