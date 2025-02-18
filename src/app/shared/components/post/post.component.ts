import { Component, Input } from '@angular/core';
import { TruncatePipe } from "../../pipes/truncate.pipe";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [TruncatePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() post: any;
} 
