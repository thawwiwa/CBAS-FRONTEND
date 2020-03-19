import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { AddComponent } from './add/add.component';
import { ApproveComponent } from './approve/approve.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [AddComponent, ApproveComponent, EditComponent, DetailsComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
