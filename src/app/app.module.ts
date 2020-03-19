import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { PermissionComponent } from './permission/permission.component';
import { TabViewModule } from 'primeng/tabview';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { LayoutModule } from './layout/layout.module';
import { RouterModule } from '@angular/router';

// import { AppRoutingModule } from './app-routing.module';
// import { routing } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PermissionComponent,
    CustomerComponent,
    LoginComponent,
    Login2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    NgbModule,
    TabViewModule,
    LayoutModule
    // AppRoutingModule,
    // routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
