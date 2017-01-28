import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material'

const routes: Routes = [
  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MaterialModule.forRoot()
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
