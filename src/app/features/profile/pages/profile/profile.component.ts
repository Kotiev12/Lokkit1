import { Component, inject } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';
import { NavbarComponent } from "../../../../shared/components/navbar/navbar.component";

@Component({
  selector: 'app-profile',
  imports: [NavbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  userService = inject(UserService)
}
