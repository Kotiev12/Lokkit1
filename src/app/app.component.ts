import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './shared/components/profile/profile.component'
import { PostComponent } from './shared/components/post/post.component'
import { CardComponent } from './shared/components/card/card.component'



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileComponent, PostComponent, CardComponent],
  templateUrl: 'app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Lokkit';
}
