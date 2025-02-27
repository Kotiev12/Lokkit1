import { Component, Input } from '@angular/core';
import { TruncatePipe } from "../../pipes/truncate.pipe";
import { ShowIfLikedDirective } from '../../directives/app-show-if-liked.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [TruncatePipe, ShowIfLikedDirective, RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() post: any;
} 
