import { ValidationService } from './../../services/validation.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  username: string;
  email: string;
  password: string;

  constructor(private validateService: ValidationService) { }

  ngOnInit(): void {
  }
  onRegister(){
    
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // Required fileds
    if(!this.validateService.validateRegister(user)) {
      console.log('fill in all fields');
      return false;
    }

    // validate email
    if(!this.validateService.validateRegister(user.email)) {
      console.log('enter valid email');
      return false;
    }
  }

}
