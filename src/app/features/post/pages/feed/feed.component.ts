import { Component } from '@angular/core';
import { PostService } from '../../../../core/services/post.service';
import { CommonModule } from '@angular/common';
import { PostComponent } from "../../../../shared/components/post/post.component";
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-feed',
  imports: [CommonModule, PostComponent, NavbarComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {
  constructor(public postService: PostService) {}
}
