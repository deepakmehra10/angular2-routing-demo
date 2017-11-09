import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component ({
  selector: 'app-root',
  template: '<h1>Create New User</h1><button>Save</button><button (click)="back()">Cancel</button>'
})

export class CreateUserComponent {
  isDirty: boolean = true;
  constructor(private router: Router) {}
  back() {
    this.router.navigate(['/']);
  }
}
