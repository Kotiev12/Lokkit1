import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { PostService } from '../../../../core/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.scss'
})
export class EditPostComponent implements OnInit {
  postService = inject(PostService)
  route = inject(ActivatedRoute)
  postId!: number 

  ngOnInit(): void {
    this.postId = +this.route.snapshot.paramMap.get('id')!;
    this.uploadingData();
  }
  editPostForm = new FormGroup({
    image: new FormControl(''),
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    content: new FormControl('', [
      Validators.required,
      Validators.maxLength(150),
    ]),
    tags: new FormArray([]),
  });
  editPost() {
    if(this.editPostForm.valid){
      this.postService.editPost(this.editPostForm.value)      
    }    
  }

  get tags(): FormArray {
    return this.editPostForm.get('tags') as FormArray;
  }
  uploadingData() {
    const post = this.postService.getPostById(this.postId);
    console.log(post);
    
    if (post) {
      this.tags.clear();

      if (post.tags) {
        post.tags.forEach((tag: any) => this.tags.push(new FormControl(tag)));
      }
      this.editPostForm.patchValue({
        title: post.title,
        content: post.content,
        image: post.image,
      });
    }
  }
  addTeg () {
    return this.tags.push(new FormControl('', Validators.required));
  }

  closeTag(): void {
    this.tags.removeAt(this.tags.length - 1);
  }
}
