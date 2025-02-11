import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './shared/components/profile/profile.component'
import { PostComponent } from './shared/components/post/post.component'
import { CardComponent } from './shared/components/card/card.component'
import { User, UserService } from './core/services/user.service'
import { CommonModule } from '@angular/common';
import { Post, PostService } from './core/services/post.service';




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


  users: User[] = [];

  posts: Post[] = [];

  constructor(private postService: PostService, public userService: UserService) {
    this.getPosts();
  }

  // Загружаем посты при инициализации
  getPosts() {
    this.posts = this.postService.getPosts();
  }

  // Метод для лайка
  likePost(postId: number) {
    this.postService.likePost(postId);
  }

  // Метод для переключения комментариев
  toggleComments(postId: number) {
    this.postService.toggleComments(postId);
  }  

  ngOnInit(): void {
    const users = this.userService.getAllUsers();
    console.log(users);
  }
  

  switchUser() {
    this.userService.switchUser();
  }
}
