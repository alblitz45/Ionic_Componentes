import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XboxsePage } from './xboxse.page';

const routes: Routes = [
  {
    path: '',
    component: XboxsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XboxsePageRoutingModule {}
