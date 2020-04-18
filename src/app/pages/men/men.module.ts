import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenRoutingModule } from './men-routing.module';
import { TopsComponent } from './tops/tops.component';
import { BottomsComponent } from './bottoms/bottoms.component';
import { MenComponent } from './men.component';


@NgModule({
  declarations: [
    MenComponent,
    TopsComponent, 
    BottomsComponent
  ],
  imports: [
    CommonModule,
    MenRoutingModule
  ]
})
export class MenModule { }
