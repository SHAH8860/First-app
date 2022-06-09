import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteResolver } from '../guards/route.resolver';

import { BlogPostComponent } from './blog-post/blog-post.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';




const routes: Routes = [
  {path:'post',component:BlogPostComponent,resolve:{data:RouteResolver}
},
  {path:'',component:ReactiveFormComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
