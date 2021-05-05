import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user: any;
  _url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  // Send registration data to back-end
  RegisterUser(user) {
    return this.http.post(`${this._url}/register`, user);
  }
}
