import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  avatar: string;
  gender: 'male' | 'female';
  role: 'admin' | 'user';
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      id: 1,
      name: "Suleim Kotiev",
      username: "string",
      email: "suleim.kotiev@example.com",
      avatar: "string",
      gender: "male",
      role: 'admin',
    },
    {
      id: 2,
      name: "Mark King",
      username: "string",
      email: "mark.king@example.com",
      avatar: "string",
      gender: "male",
      role: 'user',
    }
  ];

  getAllUsers() : User[] {
    console.log('UserService: Возвращаем список пользователей');
    return [...this.users]
  };

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  };

  updateUser(id: number, data: Partial<User>): User | undefined {
    let updatedUser: User | undefined;

    this.users = this.users.map(user => {
      if (user.id === id) {
        updatedUser = {...user, ...data};
        return updatedUser;
      }
      return user;
    });
    return updatedUser;
  };


  private activeUserSubject = new BehaviorSubject(this.users[0]);
  activeUser$ = this.activeUserSubject.asObservable(); 

  getActiveUser(): User {
    return this.activeUserSubject.value;
  }

  switchUser() {
    const currentIndex = this.users.indexOf(this.activeUserSubject.value);
    const nextIndex = (currentIndex + 1) % this.users.length;
    this.activeUserSubject.next(this.users[nextIndex]); 
  }
}


