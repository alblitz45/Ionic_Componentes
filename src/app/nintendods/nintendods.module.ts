import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NintendodsPageRoutingModule } from './nintendods-routing.module';

import { NintendodsPage } from './nintendods.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NintendodsPageRoutingModule
  ],
  declarations: [NintendodsPage]
})
export class NintendodsPageModule {}
