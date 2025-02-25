import { Injectable } from '@angular/core';

export interface Post {
  id: number;
  authorId: number;
  title: string;
  content: string;
  likes: number;
  comments: string[];
  tags: string[];
  showComments: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public posts: Post[] = [
    {
      id: 1,
      authorId: 1,
      title: "природа",
      content: "Природа — это всё, что окружает человека и не создано им. Природа бывает живая и неживая. Живая природа — это всё, что отличается способностью расти, дышать, питаться и развиваться. Человек, животные, растения — это объекты живой природы.  ",
      likes: 2,
      comments: ['интересно', 'спасибо за информацию'],
      tags: ['земля', 'природа', 'мир'],
      showComments: false
    },
    {
      id: 2,
      authorId: 2,
      title: "природа",
      content: "Природа — это всё, что окружает человека и не создано им. Природа бывает живая и неживая. Живая природа — это всё, что отличается способностью расти, дышать, питаться и развиваться. Человек, животные, растения — это объекты живой природы.  ",
      likes: 0,
      comments: ['интересно', 'спасибо за информацию'],
      tags: ['земля', 'природа', 'мир'],
      showComments: false

    },
    {
      id: 3,
      authorId: 3,
      title: "природа",
      content: "Природа — это всё, что окружает человека и не создано им. Природа бывает живая и неживая. Живая природа — это всё, что отличается способностью расти, дышать, питаться и развиваться. Человек, животные, растения — это объекты живой природы.  ",
      likes: 10,
      comments: ['интересно', 'спасибо за информацию'],
      tags: ['земля', 'природа', 'мир'],
      showComments: false
    }
  ];

    getPosts(): Post[] {
      return this.posts
    };

    likePost(postId: number): void {
      const post = this.posts.find(p => p.id === postId);
      if (post) {
        post.likes++;
      }
    };

    toggleComments(postId: number): void {
      const post = this.posts.find(p => p.id === postId);
      if(post) {
        post.showComments = !post.showComments
      }
    }

}