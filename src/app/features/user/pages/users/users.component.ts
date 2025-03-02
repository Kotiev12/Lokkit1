import { Component, Input } from '@angular/core';
import { User, UserService } from '../../../../core/services/user.service';
import { UserrComponent } from '../../../../shared/components/user/user.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-user',
  imports: [CommonModule, UserrComponent, NavbarComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComonent {
  constructor(public userService: UserService) {}
}
