import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GbaPageRoutingModule } from './gba-routing.module';

import { GbaPage } from './gba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GbaPageRoutingModule
  ],
  declarations: [GbaPage]
})
export class GbaPageModule {}
