import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: any;
  editForm: FormGroup = this.formBuilder.group({
    password: ['', Validators.required],
    address: ['', Validators.required],
    phoneNumber: ['', Validators.required]
  });
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const userEmail = params['email'];
      this.userService.getUserByEmail(userEmail).subscribe(user => {
        this.user = user;
        this.initForm();
      });
    });
  }

  initForm() {
    this.editForm = this.formBuilder.group({
      password: ['', Validators.required],
      address: [this.user.address, Validators.required],
      phoneNumber: [this.user.phoneNumber, Validators.required]
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      const updatedUserData = this.editForm.value;
      this.userService.updateUserDetails(this.user.email, updatedUserData).subscribe(updatedUser => {
        // Handle success, e.g., show a success message
      }, error => {
        // Handle error, e.g., show an error message
      });
    }
  }

}
