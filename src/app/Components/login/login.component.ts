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
        console.log("Response:", response )
        const { message, email } = response;

        if (message === 'User authenticated successfully') {
          // Store token and email in local storage
          localStorage.setItem('token', response.message);
          localStorage.setItem('email', email);

          this.toastr.success('Login Successful');
          this.toastr.info('Redirecting to home page...');
          this.router.navigate(['/viewproducts']);
        } else {
          this.toastr.error('Login failed');
        }
        
      },
      (error) => {
        this.toastr.error('Login failed');
        //this.router.navigate(['/viewproducts']);
        console.error('Login failed:', error);
      }
    );
  }
}
