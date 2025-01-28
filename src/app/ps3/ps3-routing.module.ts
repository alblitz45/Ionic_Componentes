import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ps3Page } from './ps3.page';

const routes: Routes = [
  {
    path: '',
    component: Ps3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ps3PageRoutingModule {}
