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
  image: string;
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
      showComments: false,
      image: "https://images.unsplash.com/photo-1738748986807-bf1e6d00d58d?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      authorId: 2,
      title: "природа",
      content: "Природа — это всё, что окружает человека и не создано им. Природа бывает живая и неживая. Живая природа — это всё, что отличается способностью расти, дышать, питаться и развиваться. Человек, животные, растения — это объекты живой природы.  ",
      likes: 0,
      comments: ['интересно', 'спасибо за информацию'],
      tags: ['земля', 'природа', 'мир'],
      showComments: false,
      image: "https://images.unsplash.com/photo-1738748986807-bf1e6d00d58d?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      authorId: 3,
      title: "природа",
      content: "Природа — это всё, что окружает человека и не создано им. Природа бывает живая и неживая. Живая природа — это всё, что отличается способностью расти, дышать, питаться и развиваться. Человек, животные, растения — это объекты живой природы.  ",
      likes: 10,
      comments: ['интересно', 'спасибо за информацию'],
      tags: ['земля', 'природа', 'мир'],
      showComments: false,
      image: "https://images.unsplash.com/photo-1738748986807-bf1e6d00d58d?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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