import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent }     from './test.component';
import { TestHomeComponent }     from './test-home.component';


const testRoutes: Routes=[
    {
        path:'test',
        component:TestComponent,
        children:[
            {
                path:'',
                redirectTo:'home',
                pathMatch:'full'
                
            },
            {
                path:'home',
                component:TestHomeComponent
                
            }
        ]
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(testRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TestRoutingModule { }