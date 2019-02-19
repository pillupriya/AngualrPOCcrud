import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CapgeminiComponent }   from './capgemini/capgemini.component';
import { EmployeesComponent } from "src/app/employees/employees.component";
import { LoginComponent } from "src/app/login/login.component";
import { HomeComponent }  from "src/app/home/home.component";
import { AboutComponent }  from "src/app/about/about.component";
import { ErrorComponent } from "src/app/error/error.component";

const routes: Routes = [
 // { path: '', redirectTo: '/capgemini', pathMatch: 'full' },
 // { path: 'capgemini', component: CapgeminiComponent },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  //{ path: 'heroes', component: HeroesComponent }
  {
    path:'',
    component:LoginComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'capgemini', component: CapgeminiComponent
  },
  {
    path: 'employees', component: EmployeesComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'error', component: ErrorComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
