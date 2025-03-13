import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { PostService } from '../../../../core/services/post.service';

@Component({
  selector: 'app-create-post',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {
  postService = inject(PostService)
  createPostForm = new FormGroup({
    image: new FormControl(null),
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    content: new FormControl('', [
      Validators.required,
      Validators.maxLength(150),
    ]),
    tegs: new FormArray([]),
  });
  createPost() {
    if(this.createPostForm.valid){
      this.postService.createPost(this.createPostForm.value)
    }
  }

  get tegs() {
    return this.createPostForm.get('tegs') as FormArray
  }

  addTeg () {
    return this.tegs.push(new FormControl('', Validators.required));
  }

  closeTag(): void {
    this.tegs.removeAt(this.tegs.length - 1);
  }
}
