// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { SignupService } from 'src/app/service/signup.service';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css'],
// })
// export class SignupComponent implements OnInit {
//   signupForm!: FormGroup;

//   constructor(private fb: FormBuilder, 
//               private router: Router,
//               private signupService: SignupService
//     ) {}

//   ngOnInit() {
//     this.signupForm = this.fb.group({
//       username: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
//       password: ['', Validators.required],
//       address: ['', Validators.required],
//       location: ['', Validators.required],
//     });
//   }

//   get f() {
//     return this.signupForm.controls;
//   }

//   // signup() {
//   //   if (this.signupForm.invalid) {
//   //     return;
//   //   }

//   //   console.log('Signup:', this.signupForm.value);
//   //   this.router.navigate(['/login']);
//   // }

//   signup() {
//     if (this.signupForm.invalid) {
//       return;
//     }

//     const formData = this.signupForm.value;

//     this.signupService.signup(formData).subscribe(
//       (response) => {
//         console.log('Signup successful:', response);
//         this.router.navigate(['/login']);
//       },
//       (error) => {
//         console.error('Signup failed:', error);
//         // Handle error as needed
//       }
//     );
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/service/signup.service';
import { ToastrService } from 'ngx-toastr';
import { UserDTO } from 'src/app/Models/UserDTO';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  signupResponseMessage: string | null = null;
  redirectingToLogin = false;
  user: UserDTO = new UserDTO();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private signupService: SignupService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', Validators.required],
      address: ['', Validators.required],
      location: ['', Validators.required],
    });
  }
  get f() {
    return this.signupForm.controls;
  }

  signup() {
    if (this.signupForm.invalid) {
      return;
    }

    const formData = this.signupForm.value;

    this.user.address=formData.address;
    this.user.email = formData.email;
    this.user.location = formData.location;
    this.user.password = formData.password;
    this.user.phoneNumber = formData.phoneNumber;
    this.user.userName = formData.userName;

    this.signupService.signup(this.user).subscribe(
      (response) => {
        console.log('Signup successful:', response);
        this.signupResponseMessage = response.message;
        this.toastr.success('Signup successful!', response.message);

        this.redirectingToLogin = true;

        this.toastr.info('Redirecting to login....');
        // Wait for 3 seconds before navigating to /login
        setTimeout(() => {
          
          this.router.navigate(['/login']);
        }, 3000);
      },
      (error) => {
        console.error('Signup failed:', error);
        this.signupResponseMessage = error.message;
        if (error.status === 409) {
          this.toastr.error('Username or email already exists', 'Error');
        } else {
          this.toastr.error('An error occurred while signing up', error.error.message);
        }
      }
    );
  }
}
