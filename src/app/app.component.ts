import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './shared/components/profile/profile.component'
import { PostComponent } from './shared/components/post/post.component'
import { CardComponent } from './shared/components/card/card.component'
import { UserService } from './core/services/user.service'
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileComponent, PostComponent, CardComponent, CommonModule],
  templateUrl: 'app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Lokkit';
  activeUser: any;

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    const users = this.userService.getAllUsers();
    console.log(users);
  }

  switchUser() {
    this.userService.switchUser();
  }
}
