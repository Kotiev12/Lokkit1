import { Component, inject, OnInit } from '@angular/core';
import { PostComponent } from "../../../../shared/components/post/post.component";
import { Post, PostService } from '../../../../core/services/post.service';
import { CommonModule } from '@angular/common';
import { ShowIfLikedDirective } from '../../../../shared/directives/app-show-if-liked.directive'



@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [PostComponent,CommonModule, ShowIfLikedDirective],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent implements OnInit {
  private postService = inject(PostService);
  posts: Post[] = [];

  ngOnInit(): void {
    this.posts = this.postService.getPosts(); 
  }

  hasLikedPosts(): boolean {
    return this.posts.some(post => post.likes > 0);
  }
}
