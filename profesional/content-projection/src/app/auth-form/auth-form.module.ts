

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AuthFormComponent } from './auth-form.component';
import { CommonModule } from '@angular/common';
import { AuthRememberComponent } from './auth-remember.component';

@NgModule({
    imports: [
    CommonModule,
    FormsModule        
    ],
    exports: [
        AuthFormComponent,
        AuthRememberComponent
    ],
    declarations: [
        AuthFormComponent, 
        AuthRememberComponent],
    providers: [],
})
export class AuthFormModule { }
