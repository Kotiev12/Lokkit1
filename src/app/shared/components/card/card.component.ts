import { Component, inject } from '@angular/core';
import { UserNamePipe } from '../../pipes/user-name.pipe';
import { UserService } from '../../../core/services/user.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card',
  imports: [UserNamePipe, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  private userService = inject(UserService);
  users = this.userService.getAllUsers();

}
