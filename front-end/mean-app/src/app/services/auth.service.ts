import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user: any;
  _url = 'users';

  constructor(private http: HttpClient) { }

  // Send registration data to back-end
  RegisterUser(user) {
    return this.http.post(`${this._url}/register`, user);
  }
  // authenticate user credentials using tokens
  authenticateUser(user) {
    return this.http.post(`${this._url}/authenticate`, user);
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;

  }
  loggedIn() {
    this.loadToken();
    const helper = new JwtHelperService();
    return helper.isTokenExpired(this.authToken);
  }
  // clear user tokens
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
  getProfile(): any {
    this.loadToken();
    let headers = new HttpHeaders().append('Authorization', this.authToken).append('Content-Type', 'application/json');
    return this.http.get(`${this._url}/profile`, {headers: headers});
  }
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
}
