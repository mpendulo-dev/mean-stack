import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Object;
  constructor(private authService: AuthService,
     private router: Router) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(profile => {

      console.log(profile.user);
      this.user = profile.user;
    }, err => {
      console.log(err);
      return false;
    });
  }

}
