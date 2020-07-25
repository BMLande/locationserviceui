import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchNearestOutletComponent } from './components/search-nearest-outlet/search-nearest-outlet.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'searchnearoutlet',pathMatch: 'full' 
  },
  {
    path: 'searchnearoutlet', component: SearchNearestOutletComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
