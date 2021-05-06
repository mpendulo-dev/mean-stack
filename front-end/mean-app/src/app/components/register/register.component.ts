import { AuthService } from './../../services/auth.service';
import { User } from './../../user';
import { ValidationService } from './../../services/validation.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // userModel = new User('Rob','Robert','rob@gmail.com', 'robert');
  userModel: User = {
    name: '',
    username: '',
    email: '',
    password: '',
  };
  success: boolean = false;
  fail: boolean = false;
  user: any;

  constructor(
    private validateService: ValidationService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  onRegister() {
    console.log(this.userModel);

    // Register user

    this.authService.RegisterUser(this.userModel).subscribe((data) => {
      this.user = data;
      if (this.user.success) {

        console.log(this.user);
        this.success = true;
        this.toastr.success('Login', 'User Registered!');
        this.router.navigate(['/login']);

      } else {
        this.fail = true;
        this.toastr.error(this.user.msg, 'Error!');
        this.router.navigate(['/register']);
      }
    });
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
