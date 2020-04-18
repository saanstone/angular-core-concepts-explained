import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KidsComponent } from './pages/kids/kids.component';
import { CommonComponent } from './pages/common/common.component';


const routes: Routes = [
  {
    path : 'men',
    loadChildren : () => import('src/app/pages/men/men.module').then(m => m.MenModule)
  },
  {
    path : 'women',
    loadChildren : () => import('src/app/pages/women/women.module').then(m => m.WomenModule)
  },
  {
    path : 'kids',
    component : KidsComponent
  },
  {
    path : 'common',
    component : CommonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



/**
 * RouterModule - register routes here
 */
