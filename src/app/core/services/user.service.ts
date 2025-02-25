import { Injectable } from '@angular/core';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
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

  public users: User[] = [
    {
      id: 1,
      firstName: "Suleim",
      lastName: "Kotiev",
      username: "kotiev_s",
      email: "suleim.kotiev@example.com",
      avatar: "string",
      gender: "male",
      role: 'admin',
    },
    {
      id: 2,
      firstName: "Mark",
      lastName: "King",
      username: "mark_king",
      email: "mark.king@example.com",
      avatar: "string",
      gender: "male",
      role: 'user',
    }
  ];

  getAllUsers() : User[] {
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


  public activeUser = this.users[0]
  

  switchUser(id: number) {
    const user: User | undefined = this.getUserById(id);
    if (user) {
      this.activeUser = user;
    }
  }
}

