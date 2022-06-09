import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './layout/private-layout/private-layout.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HighlightDirective } from './directives/highlight.directive'
import { PipesModule } from './pipes/pipes.module';
import { RouteResolver } from './guards/route.resolver';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';




@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    TableComponent,
    HeaderComponent,
    LeftmenuComponent,
    HomeComponent,
    ContactComponent,
    PublicLayoutComponent,
    PrivateLayoutComponent,
    HighlightDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PipesModule,
    BrowserAnimationsModule,
    MatTableModule,
    

  ],
  providers: [RouteResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
