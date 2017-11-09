import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  template: '<h1>Test Component</h1><button class="btn btn-primary" (click)="back()">Take Me Home</button>'
})

export class TestComponent {

  constructor(private router: Router) {
  }

  back() {
    this.router.navigate(['/']);
  }
}
