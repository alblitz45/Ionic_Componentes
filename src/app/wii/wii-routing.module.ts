import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WiiPage } from './wii.page';

const routes: Routes = [
  {
    path: '',
    component: WiiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WiiPageRoutingModule {}
