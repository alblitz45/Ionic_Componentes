import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NintendodsPage } from './nintendods.page';

const routes: Routes = [
  {
    path: '',
    component: NintendodsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NintendodsPageRoutingModule {}
