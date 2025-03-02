import { Component, inject, Input } from '@angular/core';
import { User, UserService } from '../../../../core/services/user.service';
import {  ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  route = inject(ActivatedRoute)
  userService = inject(UserService)
  id: string | null = null 
  user!: User | undefined
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')

    this.user = this.userService.getUserById(Number(this.id))
    console.log(this.user);
  }}
