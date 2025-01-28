import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GbaPage } from './gba.page';

const routes: Routes = [
  {
    path: '',
    component: GbaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GbaPageRoutingModule {}
