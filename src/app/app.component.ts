import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
  name = 'Guys';
}
