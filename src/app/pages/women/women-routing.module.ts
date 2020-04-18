import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WomenComponent } from './women.component';
import { SareesComponent } from './sarees/sarees.component';
import { KurtasComponent } from './kurtas/kurtas.component';


const routes: Routes = [
  {
    path : '',
    component: WomenComponent,
    children : [
      {
        path : 'sarees',
        component : SareesComponent
      },
      {
        path : 'kurtas',
        component : KurtasComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WomenRoutingModule { }
