import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginComponent } from '../login/login.component';
import { Login2Component } from '../login2/login2.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'login2', component: Login2Component
  },
  {
    path: '',
    redirectTo: '/customer',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'customer', loadChildren: () => import('../customer/customer.module').then(m => m.CustomerModule) },
      { path: 'permission', loadChildren: () => import('../permission/permission.module').then(m => m.PermissionModule) },
      { path: 'user', loadChildren: () => import('../user/user.module').then(m => m.UserModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
