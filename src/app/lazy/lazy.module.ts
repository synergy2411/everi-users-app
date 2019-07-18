import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAmLazyComponent } from './i-am-lazy/i-am-lazy.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';

const LAZY_ROUTE : Routes = [{
  path : '',
  component : IAmLazyComponent,
  children : [{
    path : 'customer',
    component : CustomerComponent
  }]
}]

@NgModule({
  declarations: [IAmLazyComponent, CustomerComponent],
  imports: [
    CommonModule, RouterModule.forChild(LAZY_ROUTE)
  ]
})
export class LazyModule { }
