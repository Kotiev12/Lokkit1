import { Component, Input } from '@angular/core';
import { TruncatePipe } from "../../pipes/truncate.pipe";
import { ShowIfLikedDirective } from '../../directives/app-show-if-liked.directive';
import { RouterLink } from '@angular/router';
import { Post } from '../../../core/services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [TruncatePipe, ShowIfLikedDirective, RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() post!: Post;
} 
