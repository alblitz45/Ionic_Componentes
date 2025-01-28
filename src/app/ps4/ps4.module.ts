import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ps4PageRoutingModule } from './ps4-routing.module';

import { Ps4Page } from './ps4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ps4PageRoutingModule
  ],
  declarations: [Ps4Page]
})
export class Ps4PageModule {}
