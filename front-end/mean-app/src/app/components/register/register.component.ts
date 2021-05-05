import { AuthService } from './../../services/auth.service';
import { User } from './../../user';
import { ValidationService } from './../../services/validation.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private validateService: ValidationService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onRegister() {
    console.log(this.userModel);

    // Register user

    this.authService.RegisterUser(this.userModel).subscribe((data) => {
      if (data) {
        this.success = true;
        this.router.navigate(['/login']);
      } else {
        this.fail = true;
        this.router.navigate(['/register']);
      }
    });
  }
}
