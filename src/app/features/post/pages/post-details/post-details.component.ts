import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Post, PostService } from '../../../../core/services/post.service';

@Component({
  selector: 'app-post-details',
  imports: [RouterLink],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent {
  route = inject(ActivatedRoute)
  postService = inject(PostService)
  id: string | null = null 
  post!: Post | undefined
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')

    this.post = this.postService.getPostById(Number(this.id))
    console.log(this.post);
  }
}
