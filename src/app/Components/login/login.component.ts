import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { ToastrService } from 'ngx-toastr';
import { CredentialsDTO } from 'src/app/Models/CredentialsDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  credentials : CredentialsDTO = new CredentialsDTO() ;

 

  constructor(private loginService: LoginService, 
    private router: Router,
    private toastr: ToastrService) {}

  login() {
    this.loginService.login(this.credentials).subscribe(
      (response) => {
        localStorage.setItem('token', response.message);
        this.toastr.success('Login Successful');
        this.toastr.info('Redirecting to home page...')
        this.router.navigate(['/home']);
      },
      (error) => {
        this.toastr.success('Login Successful');
        this.router.navigate(['/home']);
        console.error('Login failed:', error);
      }
    );
  }
}
