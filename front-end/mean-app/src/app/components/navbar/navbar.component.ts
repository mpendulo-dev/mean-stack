import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authservice: AuthService, 
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onLogOut() {

    this.authservice.logout();
    this.toastr.success('You are logged out!', 'Logout');
    this.router.navigate(['login']);
  }
}
