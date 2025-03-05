import { Component } from '@angular/core';
import { NavbarComponent } from "../../../../shared/components/navbar/navbar.component";
import { InputComponent } from "../../components/input.component";

@Component({
  selector: 'app-profile-settings',
  imports: [InputComponent],
  templateUrl: './profile-settings.component.html',
  styleUrl: './profile-settings.component.scss'
})
export class ProfileSettingsComponent {

}
