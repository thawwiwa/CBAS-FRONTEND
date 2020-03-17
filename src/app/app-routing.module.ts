import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PermissionComponent } from './permission/permission.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';

const routes: Routes = [
  {path: 'customer', component: CustomerComponent},
  {path: 'customeradd', component: CustomerAddComponent},
  {path: 'user', component: UserComponent},
  {path: 'permission', component: PermissionComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
