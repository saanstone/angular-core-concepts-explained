import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenComponent } from './men.component';
import { TopsComponent } from './tops/tops.component';
import { BottomsComponent } from './bottoms/bottoms.component';


const routes: Routes = [
  {
    path : '',
    component : MenComponent,
    children : [
      {
        path : 'tops',
        component : TopsComponent
      },
      {
        path : 'bottoms',
        component : BottomsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenRoutingModule { }
