import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {ContentComponent} from './content/content.component';
import {RouterModule, Routes} from '@angular/router';
import {SysmgtComponent} from './sysmgt/sysmgt.component';
import {VdrmgtComponent} from './vdrmgt/vdrmgt.component';
import {CarmgtComponent} from './carmgt/carmgt.component';
import {HomeComponent} from './home/home.component';
import {VdrFormComponent} from './vdrmgt/vdr-form/vdr-form.component';
import {LoggerService} from './shared/logger.service';
import {SystemService} from './sysmgt/system.service';
import {MultiplePipe} from './pipe/multiple.pipe';
import {VdrSearchNameFilterPipe} from './vdrmgt/pipe/vdrSearchNameFilter.pipe';
import {HometestComponent} from './home/hometest/hometest.component';
import {Hometest2Component} from './home/hometest2/hometest2.component';
import {DirectiveDirective} from './home/directive.directive';
import {UsermgtComponent} from './sysmgt/usermgt/usermgt/usermgt.component';
import {PstnmgtComponent} from './sysmgt/pstnmgt/pstnmgt/pstnmgt.component';
import {AuthmgtComponent} from './sysmgt/authmgt/authmgt/authmgt.component';
import {UserformComponent} from './sysmgt/usermgt/userform/userform.component';
import {PstnformComponent} from './sysmgt/pstnmgt/pstnform/pstnform.component';
import {CusmgtComponent} from './cusmgt/cusmgt/cusmgt/cusmgt.component';
import {CusformComponent} from './cusmgt/cusmgt/cusform/cusform.component';
import {PresformComponent} from './presmgt/presform/presform.component';
import {PresmgtComponent} from './presmgt/presmgt/presmgt.component';
import {CarformComponent} from './carmgt/carform/carform.component';
import {OdrmgtComponent} from './order/odrmgt/odrmgt.component';
import {OrderformComponent} from './order/orderform/orderform.component';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './shared/guards/auth-guard.service';
import {LoginServiceService} from './shared/services/login-service.service';
import {MainComponent} from './main/main.component';
import {FieldErrorDisplayComponent} from './shared/message/field-error-display/field-error-display.component';
import {ValidationService} from './shared/services/validation.service';
import {HttpClientModule} from "@angular/common/http";
import {UserServiceService} from "./service/user-service.service";
import {FileUploaderModule} from "ng4-file-upload";
import {DateService} from "./shared/services/date.service";
import {RoleService} from "./service/role.service";
import {CustomerService} from "./service/customer.service";
import {AddrSelectService} from "./shared/services/addr-select.service";
import {VendorService} from "./service/vendor.service";

const routeConfig: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'home', component: HomeComponent, children: [{
      path: '',
      canActivateChild: [AuthGuardService],
      children: [
        {path: 'usermgt', component: UsermgtComponent},
        {path: 'userform', component: UserformComponent},
        {path: 'userform/:id', component: UserformComponent},
        {path: 'pstnmgt', component: PstnmgtComponent},
        {path: 'pstnform/:id', component: PstnformComponent},
        {path: 'cusmgt', component: CusmgtComponent},
        {path: 'cusform', component: CusformComponent},
        {path: 'cusform/:id', component: CusformComponent},
        {path: 'presmgt', component: PresmgtComponent},
        {path: 'presform/:id', component: PresformComponent},
        {path: 'authmgt', component: AuthmgtComponent},
        {path: 'vdrmgt', component: VdrmgtComponent},
        {path: 'vdrmgt/:id', component: VdrFormComponent},
        {path: 'carmgt', component: CarmgtComponent},
        {path: 'carform/:id', component: CarformComponent},
        {path: 'odrmgt', component: OdrmgtComponent},
        {path: 'orderform/:id', component: OrderformComponent}],
    }], canActivate: [AuthGuardService]
  },
  // {path: '**', redirectTo: '/login', pathMatch: 'full'}
  // {path: 'usermgt', component: UsermgtComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    OdrmgtComponent,
    SysmgtComponent,
    VdrmgtComponent,
    CarmgtComponent,
    HomeComponent,
    VdrFormComponent,
    MultiplePipe,
    VdrSearchNameFilterPipe,
    HometestComponent,
    Hometest2Component,
    DirectiveDirective,
    UsermgtComponent,
    PstnmgtComponent,
    AuthmgtComponent,
    UserformComponent,
    PstnformComponent,
    CusmgtComponent,
    CusformComponent,
    PresmgtComponent,
    PresformComponent,
    CarformComponent,
    OrderformComponent,
    LoginComponent,
    MainComponent,
    FieldErrorDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule,
    ReactiveFormsModule,
    FileUploaderModule
  ],
  providers: [
    LoggerService,
    SystemService,
    AuthGuardService,
    LoginServiceService,
    ValidationService,
    UserServiceService,
    DateService,
    RoleService,
    CustomerService,
    AddrSelectService,
    VendorService], // used to mention what service to provide in this module
  bootstrap: [AppComponent] // main component
})
export class AppModule {
}
