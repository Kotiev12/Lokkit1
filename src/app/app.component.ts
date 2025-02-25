import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './features/profile/pages/profile/profile.component';
import { FeedComponent } from './features/post/pages/feed/feed.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileComponent, FeedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Lokkit1';
}
