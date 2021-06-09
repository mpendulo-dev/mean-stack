import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  username: string;
  password: string;
  userData: any;

  constructor(private authservice: AuthService, 
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onLogin() {
    const user = {
      username: this.username,
      password: this.password
    }
    
    this.authservice.authenticateUser(user).subscribe(data => {

      this.userData = data;
      if(this.userData.success){
        
        this.authservice.storeUserData(this.userData.token, this.userData.user);
        this.toastr.success('User Logged in', 'Success')
        this.router.navigate(['dashboard']);

      } 
      else if(!this.userData.success && user.password !== undefined && user.username !== undefined) {
        console.log(this.userData);
        this.toastr.error(this.userData.msg,'Error!');
        this.router.navigate(['login']);
      }
      console.log(user);
      if(user.username === undefined && user.password === undefined) {
        this.toastr.error('Please enter user credentials', 'Error');

      }
    });
   
  }

}
