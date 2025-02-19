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
export class FeedComponent {
  constructor(public postService: PostService) {}
}
