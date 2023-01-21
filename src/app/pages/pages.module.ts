import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../modules/material-angular/material-angular.module';
import { AppRoutingModule } from '../app-routing.module';
import { AnotherPageComponent } from './another-page/another-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AnotherPageComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports:[
    AnotherPageComponent,
    NotFoundComponent,
    HomeComponent
  ]
})
export class PagesModule { }
