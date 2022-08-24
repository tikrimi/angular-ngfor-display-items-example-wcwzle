import { Component } from '@angular/core';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  users = [
    { firstName: 'Frank' },
    { firstName: 'Bob' },
    { firstName: 'Alice' },
  ];
}
