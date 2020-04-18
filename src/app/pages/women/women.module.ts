import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WomenRoutingModule } from './women-routing.module';
import { SareesComponent } from './sarees/sarees.component';
import { KurtasComponent } from './kurtas/kurtas.component';
import { WomenComponent } from './women.component';


@NgModule({
  declarations: [
    WomenComponent, 
    SareesComponent, 
    KurtasComponent
  ],
  imports: [
    CommonModule,
    WomenRoutingModule
  ]
})
export class WomenModule { }
