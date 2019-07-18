import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PipeDemoComponent } from './pipes/pipe-demo.component';
import { UsersComponent } from './users/users.component';
import { LoginGuardService } from './services/login-gaurd.service';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { NewEmployeeComponent } from './employee/new-employee/new-employee.component';

export const APP_ROUTES: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',                     // http://localhost:4200/login
  component: LoginComponent
}, {
  path: "register",                // http://localhost:4200/register
  component: RegisterComponent
}, {
  path: 'pipe',                  // http://localhost:4200/pipe
  component: PipeDemoComponent
}, {
  path: 'users',                 // http://localhost:4200/users
  component: UsersComponent,
  canActivate : [ LoginGuardService]
},{
  path : 'product',
  component : ProductComponent,
  children : [{
    path : 'overview/:id',          //http://localhost:4200/product/overview/3
    component : OverviewComponent
  }, {
    path : 'spec',            //http://localhost:4200/product/spec
    component : SpecificationComponent
  }]
}, {
  path : 'employee',            //http://localhost:4200/employee
  component : NewEmployeeComponent
},{
  path : 'lazy',
  loadChildren : './lazy/lazy.module#LazyModule'     // path/to/your/file/Name_of_Module_file#ModuleClassName
},{
  path: '**',                    // http://localhost:4200/xyz
  redirectTo: 'login',
  pathMatch: 'full'
}]
