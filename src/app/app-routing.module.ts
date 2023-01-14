import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { AnotherPageComponent } from './pages/another-page/another-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'anotherpage',
    component: AnotherPageComponent
  },
  {
    path:'**',
    component: NotFoundComponent
  }

]

@NgModule({

  declarations:[],
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
})

export class AppRoutingModule {}
