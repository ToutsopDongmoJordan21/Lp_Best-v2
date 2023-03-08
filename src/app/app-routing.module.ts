import { OfficeComponent } from './Components/Home/CategoryOptions/office/office.component';
import { LenovoComponent } from './Components/Home/lenovo/lenovo.component';
import { CategoriesComponent } from './Components/Home/categories/categories.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Login page
import { LoginComponent } from './Components/login/login.component';
// Dashboard Component
import { DashboardComponent } from './Components/Administator/dashboard/dashboard.component';
// Employee HomePage
import { HomePageComponent } from './Components/Employee/home-page/home-page.component';
// Main Home Page
import { IndexComponent } from './Components/Home/index/index.component';


const routes: Routes = [
  {
    path : 'login',
    title: 'Login Page', // Setting up the title for browser history
    component : LoginComponent
  },
  {
    path : 'dashboard',
    title: 'Dashboard', // Setting up the title for browser history
    component : DashboardComponent
  },
  {
    path : 'employee',
    title: 'Employee Dashboard', // Setting up the title for browser history
    component : HomePageComponent
  },
  {
    path : 'index',
    title: 'Index Page', // Setting up the title for browser history
    component : IndexComponent
  },
  // {
  //   path : 'catigories',
  //   title: 'Index Page', // Setting up the title for browser history
  //   component : OfficeComponent
  // },
  // {
  //   path: '',
  //   redirectTo : '/login',
  //   pathMatch: 'full'
  // },
  // {
  //   path : '**',
  //   redirectTo : '/login',
  //   pathMatch : 'full'
  // },
  {
    path: '',
    redirectTo : '/login',
    pathMatch: 'full'
  },
  {
    path : '**',
    redirectTo : '/login',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ LoginComponent,
                                  DashboardComponent,
                                  HomePageComponent,
                                  IndexComponent]