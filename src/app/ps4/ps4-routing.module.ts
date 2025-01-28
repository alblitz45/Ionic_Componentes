import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ps4Page } from './ps4.page';

const routes: Routes = [
  {
    path: '',
    component: Ps4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ps4PageRoutingModule {}
