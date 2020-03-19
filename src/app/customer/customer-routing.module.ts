import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { AddComponent } from './add/add.component';
import { ApproveComponent } from './approve/approve.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'add', component:AddComponent},
  { path: 'approve', component:ApproveComponent},
  { path: 'edit', component:EditComponent},
  { path: 'details', component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
