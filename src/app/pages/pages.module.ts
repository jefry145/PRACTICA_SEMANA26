import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PageinitComponent } from './pageinit/pageinit.component';
import { AppRoutingModule } from '../app.routing.module';
import { AppMaterial } from '../angular.material.module';



@NgModule({
  declarations: [
    HomeComponent,
    PageinitComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AppMaterial
  ]
})
export class PagesModule { }
