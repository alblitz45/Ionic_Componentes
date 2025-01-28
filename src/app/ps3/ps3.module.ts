import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ps3PageRoutingModule } from './ps3-routing.module';

import { Ps3Page } from './ps3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ps3PageRoutingModule
  ],
  declarations: [Ps3Page]
})
export class Ps3PageModule {}
