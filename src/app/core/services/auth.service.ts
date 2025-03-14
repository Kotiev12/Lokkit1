import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router = inject(Router)
  isLoggedIn: boolean = true;
  login(data: any){
    console.log(data);
    this.router.navigate(['feed'])
    this.isLoggedIn = !this.isLoggedIn;
  }
  register(data: any){
    console.log(data);
    this.router.navigate(['feed'])
    this.isLoggedIn = !this.isLoggedIn;
  }
}

