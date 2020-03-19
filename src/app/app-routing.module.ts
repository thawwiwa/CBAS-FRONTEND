import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { UserComponent } from './user/user.component';
// import { PermissionComponent } from './permission/permission.component';
// import { CustomerComponent } from './customer/customer.component';
// import { CustomerAddComponent } from './customer-add/customer-add.component';
// import { CustomerApproveComponent } from './customer-approve/customer-approve.component';
// import { UserAddComponent } from './user-add/user-add.component';
// import { PermissionAddComponent } from './permission-add/permission-add.component';
// import { LayoutModule } from './layout/layout.module';


// const routes: Routes = [
//   {path: 'customer', component: CustomerComponent},
//   {path: 'customeradd', component: CustomerAddComponent},
//   {path: 'customerapprove',component: CustomerApproveComponent},
//   {path: 'permission', component: PermissionComponent},
//   {path: 'permissionadd', component: PermissionAddComponent},
//   {path: 'user', component: UserComponent},
//   {path: 'useradd', component: UserAddComponent}
// ];

const routes: Routes = [
    {
      path: '',
      redirectTo: '/customer',
      pathMatch: 'full'
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
      // ,LayoutModule
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
