import { Component, EventEmitter, Output } from '@angular/core';
import { Authenticate } from '@bike-sell/data-models';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'bike-sell-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {


  @Output() submitted = new EventEmitter<Authenticate>();

  loginForm = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    }
  )

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
  login(): void {
    this.submitted.emit({
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    } as Authenticate);
  }


}
