import { Component } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComonent {
  constructor(public userService: UserService) {}
}
