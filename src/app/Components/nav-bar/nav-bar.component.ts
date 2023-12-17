import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
logout() {
throw new Error('Method not implemented.');
}

  constructor(private router: Router) {}

  isSignUpPage(): boolean {
    return this.router.url.includes('signup');
  }
  ngOnInit(): void {
  }

}
