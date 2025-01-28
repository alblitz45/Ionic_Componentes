import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XboxsePageRoutingModule } from './xboxse-routing.module';

import { XboxsePage } from './xboxse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XboxsePageRoutingModule
  ],
  declarations: [XboxsePage]
})
export class XboxsePageModule {}
