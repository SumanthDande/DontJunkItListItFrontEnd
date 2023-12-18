import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  constructor(private router: Router, private toastrService: ToastrService) {}

  isSignUpPage(): boolean {
    return this.router.url.includes('signup');
  }
  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.toastrService.success('Logged out successfully');
    this.router.navigate(['/login']);
    }

}
