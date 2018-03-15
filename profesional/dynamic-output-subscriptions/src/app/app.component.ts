import { Component, AfterContentInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, TemplateRef } from '@angular/core';

import { User } from './auth-form/auth-form.interface';
import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
  selector: 'app-root',
  template: `
    <div>
    <!--
      <button (click)="destroyComponent()">
          Destroy
      </button>
      <button (click)="moveComponent()">
          Move
      </button>
      -->
      <div #entry></div>

      <ng-template #tmpl let-name let-location="location">
          {{ name }} {{ location }}
      </ng-template>

    </div>
  `
})
export class AppComponent implements AfterContentInit {

  component: ComponentRef<AuthFormComponent>;

  @ViewChild('entry', { read: ViewContainerRef}) entry: ViewContainerRef;
  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  constructor(private resolver: ComponentFactoryResolver){}

  moveComponent(){
    this.entry.move(this.component.hostView, 1);
  }

  ngAfterContentInit(): void {
    this.entry.createEmbeddedView(this.tmpl, {
      $implicit: 'Juan Perez',
      location: 'PE, Callao'
    });

    // const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    // this.component = this.entry.createComponent(authFormFactory, 0);
    // this.component.instance.title='Create account';
    // this.component.instance.submitted.subscribe(this.loginUser);

  }
  loginUser(user: User) {
    console.log('Login', user);
  }

  destroyComponent(){
    this.component.destroy();
  }

}