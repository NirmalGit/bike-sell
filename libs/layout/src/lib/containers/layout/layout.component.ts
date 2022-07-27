import { Component } from '@angular/core';
import { AuthService } from '@bike-sell/auth';
import { User } from '@bike-sell/data-models';
import { Observable } from 'rxjs';

@Component({
  selector: 'bike-sell-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  user$: Observable<User | null>;
  constructor(private authService: AuthService) {
    this.user$ = this.authService.user$;
  }


}
