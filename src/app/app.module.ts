import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { PermissionComponent } from './permission/permission.component';
import { TabViewModule } from 'primeng/tabview';
import { routing } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PermissionComponent,
    CustomerComponent,
    CustomerAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    routing,
    NgbModule,
    TabViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
