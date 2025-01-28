import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NintendoswPageRoutingModule } from './nintendosw-routing.module';

import { NintendoswPage } from './nintendosw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NintendoswPageRoutingModule
  ],
  declarations: [NintendoswPage]
})
export class NintendoswPageModule {}
