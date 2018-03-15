import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
    
      <button (click)="addProp()"> Add property </button>
      <button (click)="changeUser()"> Change user object </button>
      <button (click)="changeName()"> Change name property </button>

      <div class="users">
        <example-one [user]="user"></example-one>

        <example-two [user]="user"></example-two>
      </div>

    </div>
  `
})
export class AppComponent {

  user: any = {
    name: "Juan Perez",
    age: 44,
    location: "Callao"
  };

  addProp(){
    this.user.email = 'javierperez@gmail.com';
  }

  changeName(){
    this.user.name = 'John Perez';
  }

  changeUser(){
    this.user = {
      name: "Tom Perez",
      age: 41,
      location: "Lima"
    };
  }


}
