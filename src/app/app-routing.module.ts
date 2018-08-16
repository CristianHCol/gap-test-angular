import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CarDetailComponent } from './pages/car-detail/car-detail.component';
import { CarCompareComponent } from './pages/car-compare/car-compare.component';
import { CarCompareDetailComponent } from './pages/car-compare/car-compare-detail/car-compare-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        component: DashboardComponent,
        path: 'dashboard'
      },
      {
        path: 'carDetail/:id',
        component: CarDetailComponent
      },
      {
        component: CarCompareComponent,
        path: 'carCompare',
      },
       {
        component: CarCompareDetailComponent,
        path: 'carCompareDetail'
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
export const routedComponents: any[] = [ LoginComponent, MainComponent, DashboardComponent, CarDetailComponent, CarCompareComponent, CarCompareDetailComponent];
