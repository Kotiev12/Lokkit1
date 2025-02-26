import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProfileComponent } from './features/profile/pages/profile/profile.component';
import { FeedComponent } from './features/post/pages/feed/feed.component';
import { UserComponent } from "./features/user/pages/user/user.component";
import { ProfileInfoComponent } from "./features/profile/pages/profile-settings/profile-settings.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ProfileComponent, FeedComponent, UserComponent, ProfileInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Lokkit1';
}
