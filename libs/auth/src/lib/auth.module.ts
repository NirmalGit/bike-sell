import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './container/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from '@bike-sell/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthInterceptor } from './interceptors/auth/auth.interceptor';
//import { AuthInterceptor } from '@bike-sell/auth/src/interceptors/auth/auth.interceptor';

export const authRoutes: Route[] = [
  { path: 'login', component: LoginComponent }
];

const COMPONENTS = [LoginComponent, LoginFormComponent];

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule, MaterialModule, ReactiveFormsModule],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AuthModule { }
