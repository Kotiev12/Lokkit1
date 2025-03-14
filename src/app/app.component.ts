import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { ProfileComponent } from "./features/profile/pages/profile/profile.component";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { CreatePostComponent } from "./features/post/components/create-post/create-post.component";
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './features/register/pages/register/register.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ProfileComponent, SidebarComponent, ReactiveFormsModule, RegisterComponent, CreatePostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Lokkit1';
}
