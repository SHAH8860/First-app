import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreetComponent } from '../greet/greet.component';
// import { HomeComponent } from '../home/home.component';
import { HomeComponent } from '../private/home/home.component';
import { TableComponent } from '../table/table.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  // {path:'',component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:'news',component:GreetComponent},
  {path:'table',component:TableComponent},
  {path:'parent',component:ParentComponent},
  {path:'child',component:ChildComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
