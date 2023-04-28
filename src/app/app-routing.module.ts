import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HouseholdsComponent } from './components/households/households.component';
import { LeadsComponent } from './components/leads/leads.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'leads', component:LeadsComponent
  },
  {
    path:'households', component:HouseholdsComponent
  },
  {
    path:'opportunities', component:OpportunitiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
