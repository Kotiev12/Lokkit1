import { Injectable } from '@angular/core';

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

  public users: User[] = [
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


  public activeUser = this.users[0]
  

  switchUser(id: number) {
    const user: User | undefined = this.getUserById(id);
    console.log(user);
    if (user) {
      this.activeUser = user;
    }
  }
}


