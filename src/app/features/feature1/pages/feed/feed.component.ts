import { Component, OnInit } from '@angular/core';
import { PostComponent } from "../../../../shared/components/post/post.component";
import { PostService } from '../../../../core/services/post.service';
import { CommonModule } from '@angular/common';
import { ShowIfLikedDirective } from '../../../../shared/directives/app-show-if-liked.directive'




@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [PostComponent, CommonModule, ShowIfLikedDirective],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent implements OnInit {
  posts: any[] = [];


  constructor(private postService: PostService) {}
 
  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

  hasLikedPosts(): boolean {
    return this.posts.some(post => post.likes > 0);
  }


}
