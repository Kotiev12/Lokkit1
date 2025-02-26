import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { ProfileComponent } from "./features/profile/pages/profile/profile.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Lokkit1';
}
