import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ps2Page } from './ps2.page';

const routes: Routes = [
  {
    path: '',
    component: Ps2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ps2PageRoutingModule {}
