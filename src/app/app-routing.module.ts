import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { KidsComponent } from './pages/kids/kids.component';
import { CommonComponent } from './pages/common/common.component';


const routes: Routes = [ // sets up routes constant where you define your routes
  {
    path : 'men',
    loadChildren : () => import('src/app/pages/men/men.module').then(m => m.MenModule)
  },
  {
    path : 'women',
    loadChildren : () => import('src/app/pages/women/women.module').then(m => m.WomenModule)
  },
  {
    path : 'kids', // defines the URL of the path
    component : KidsComponent //defines the component Angular should use for the corresponding path.
  },
  {
    path : 'common',
    component : CommonComponent
  },
  {
    path : '', // initial relative URL
    component : CommonComponent
  }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



/**
 * RouterModule - register routes here
 */
