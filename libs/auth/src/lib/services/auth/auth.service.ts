import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authenticate, User } from '@bike-sell/data-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(authenticate: Authenticate): Observable<User> {
    return this.httpClient.post<User>('http://localhost:3000/login', authenticate);
  }
}
