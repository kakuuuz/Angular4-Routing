import { Component } from '@angular/core';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component'
import {TestHomeComponent} from './test/test-home.component'


const appRoutes: Routes = [
  { path:'test',
loadChildren: 'app/test/test.module#TestModule'},
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }