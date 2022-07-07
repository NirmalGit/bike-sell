import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Authenticate } from '@bike-sell/data-models';


@Component({
  selector: 'bike-sell-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {

  @Output() submit = new EventEmitter<Authenticate>();



  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  ngOnInit(): void { }

  login(authenticate: Authenticate): void {
    this.submit.emit(authenticate);
  }
}
