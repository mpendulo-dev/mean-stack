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
  authenticateUser(user) {
    return this.http.post(`${this._url}/authenticate`, user);
  }
  storeUserData(token, user) {
    localStorage.setItem('id token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;

  }
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
