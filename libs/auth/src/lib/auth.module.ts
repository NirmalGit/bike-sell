import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './container/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@bike-sell/material';
import { ReactiveFormsModule } from '@angular/forms';

export const authRoutes: Route[] = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule, MaterialModule, ReactiveFormsModule],
  declarations: [LoginComponent, LoginFormComponent],
})
export class AuthModule { }
