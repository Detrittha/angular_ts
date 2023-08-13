import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanmarkComponent } from './page/landmark/lanmark.component';
const routes: Routes = [
  { path : '',component : LanmarkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
