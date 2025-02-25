import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userName'
})
export class UserNamePipe implements PipeTransform {

  transform(user: { firstName: string; lastName: string; username: string }): string {
    return user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : user.username
    }
  }


