import { Component } from '@angular/core';
import { ProfileInfoComponent } from "./profile-info/profile-info.component";

@Component({
  selector: 'app-profile',
  imports: [ProfileInfoComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
