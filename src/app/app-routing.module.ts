import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
// import { GreetComponent } from './greet/greet.component';
import { TableComponent } from './table/table.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './layout/private-layout/private-layout.component';
import { BlogPostComponent } from './public/blog-post/blog-post.component';
import { ActivateGuard } from './guards/activate.guard';

const Private_module:Routes=[
  {path:"",
  loadChildren:()=>import("./private/private.module").then(m=>m.PrivateModule)
  

}

]
const Public_module:Routes=[
  {path:"",
  loadChildren:()=>import("./public/public.module").then(m=>m.PublicModule)

}

]


const approutes: Routes = [
  {path:"",component:PublicLayoutComponent,children:Public_module},
  {path:"private",component:PrivateLayoutComponent,children:Private_module,canActivate: [ActivateGuard]},
  // {path:'news',component:GreetComponent},
  // {path:'blog',component:BlogPostComponent,children:Public_module},
 {path:'table',component:TableComponent,children:Private_module},
  // {path:'home',component:HomeComponent},
  // {path:'contact',component:ContactComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
