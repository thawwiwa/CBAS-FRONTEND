import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermissionComponent } from './permission.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: '', component: PermissionComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionRoutingModule { }
