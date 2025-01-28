import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XboxonePageRoutingModule } from './xboxone-routing.module';

import { XboxonePage } from './xboxone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XboxonePageRoutingModule
  ],
  declarations: [XboxonePage]
})
export class XboxonePageModule {}
