import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ps2PageRoutingModule } from './ps2-routing.module';

import { Ps2Page } from './ps2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ps2PageRoutingModule
  ],
  declarations: [Ps2Page]
})
export class Ps2PageModule {}
