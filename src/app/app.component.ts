import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { ProfileComponent } from "./features/profile/pages/profile/profile.component";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ProfileComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Lokkit1';
}
