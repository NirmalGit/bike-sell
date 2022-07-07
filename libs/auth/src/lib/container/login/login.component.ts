import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Authenticate } from '@bike-sell/data-models';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'bike-sell-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    console.log()
  }

  login(authentic: Authenticate): void {
    this.authService.login(authentic).subscribe()
  }
}
