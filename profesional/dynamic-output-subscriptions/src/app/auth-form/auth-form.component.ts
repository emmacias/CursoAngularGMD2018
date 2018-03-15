import { Component, ChangeDetectorRef, ElementRef, Output, ViewChild, ViewChildren, AfterViewInit, EventEmitter, ContentChildren, QueryList, AfterContentInit, Renderer } from '@angular/core';

import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        {{ title }}
       
        <label>
          Email address
          <input type="email" name="email" ngModel #email>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <button type="submit">
            {{ title }}
        </button>
      </form>
    </div>
  `
})
export class AuthFormComponent  {

  title = 'Login';

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  
  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
