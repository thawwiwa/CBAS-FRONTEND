import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../_helpers/auth.guard';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
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
      { path: 'customer', loadChildren: () => import('../customer/customer.module').then(m => m.CustomerModule), canActivate: [AuthGuard] },
      { path: 'permission', loadChildren: () => import('../permission/permission.module').then(m => m.PermissionModule), canActivate: [AuthGuard] },
      { path: 'user', loadChildren: () => import('../user/user.module').then(m => m.UserModule), canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
