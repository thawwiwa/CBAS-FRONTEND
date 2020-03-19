import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionRoutingModule } from './permission-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [AddComponent, EditComponent],
  imports: [
    CommonModule,
    PermissionRoutingModule
  ]
})
export class PermissionModule { }
