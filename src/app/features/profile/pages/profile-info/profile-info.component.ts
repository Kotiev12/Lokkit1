import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { editNameValidator } from '../../../editNameValidator';

@Component({
  selector: 'app-profile-info',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.scss'
})
export class ProfileInfoComponent implements OnInit {
  ngOnInit(): void {
    this.uploadingData()
  }


  userService = inject(UserService)

  updateUser(){
    if(this.editProfileForm.valid){
      this.userService.updateUser(this.userService.activeUser.id, this.editProfileForm.value)
    }
  }

  uploadingData() {
    if (this.userService.activeUser) {
      this.editProfileForm.patchValue({
        firstName: this.userService.activeUser.firstName,
        lastName: this.userService.activeUser.lastName,
        email: this.userService.activeUser.email,
      });
    }};

  editProfileForm = new FormGroup({
    firstName: new FormControl('', [Validators.minLength(3), editNameValidator()]),
    lastName: new FormControl('', [Validators.minLength(3), editNameValidator()]),
    email: new FormControl('', Validators.email)
  })
}
