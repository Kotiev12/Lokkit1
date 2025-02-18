import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileSettingsComponent } from './features/feature1/pages/profile/profile-settings/profile-settings.component'
import { ProfileInfoComponent } from './features/feature1/pages/profile/profile-info/profile-info.component'
import { ProfileComponent } from './features/feature1/pages/profile/profile.component'
import { PostComponent } from './shared/components/post/post.component'
import { NavbarComponent } from './shared/components/navbar/navbar.component'
import { CardComponent } from './shared/components/card/card.component'
import { User, UserService } from './core/services/user.service'
import { CommonModule } from '@angular/common';
import { PostService } from './core/services/post.service';
import { UsersComponent } from "./features/feature1/pages/users/users.component";
import { HighlightDirective } from "./shared/directives/highlight.directive";
import { FeedComponent } from "./features/feature1/pages/feed/feed.component";





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileComponent, PostComponent, CardComponent, CommonModule, ProfileSettingsComponent, ProfileInfoComponent, NavbarComponent, UsersComponent, HighlightDirective, FeedComponent],
  templateUrl: 'app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'Lokkit';
  activeUser: any;


  constructor( public userService: UserService, public postService: PostService ) {

  }

  getPosts() {
    this.postService.getPosts();
  }

  likePost(postId: number) {
    this.postService.likePost(postId);
  }

  toggleComments(postId: number) {
    this.postService.toggleComments(postId);
  }  

  ngOnInit(): void {
    const users = this.userService.getAllUsers();
    console.log(users);
  }
  

  switchUser(id: number) {
    this.userService.switchUser(id);
  }
}
