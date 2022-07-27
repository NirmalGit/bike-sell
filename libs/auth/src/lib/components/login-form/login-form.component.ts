import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Authenticate } from '@bike-sell/data-models';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'bike-sell-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {


  @Output() submitted = new EventEmitter<Authenticate>();

  loginForm = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    }
  )
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
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
