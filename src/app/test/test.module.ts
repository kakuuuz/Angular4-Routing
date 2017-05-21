import { NgModule }      from '@angular/core';

import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import {TestHomeComponent} from './test-home.component';
import { TestComponent }  from './test.component';
import { Routes, RouterModule } from '@angular/router';
import {TestRoutingModule} from './test.routing-module'
@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    TestRoutingModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  declarations: [
    TestComponent,TestHomeComponent
  ],
  bootstrap: [ TestComponent,TestHomeComponent ]
})
export class TestModule { }
