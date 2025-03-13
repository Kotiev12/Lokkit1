import { Routes } from '@angular/router';
import { FeedComponent } from './features/post/pages/feed/feed.component';
import { UsersComonent } from './features/user/pages/users/users.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { ProfileComponent } from './features/profile/pages/profile/profile.component';
import { authGuard } from './core/guards/auth.guard';
import { RegisterComponent } from './features/register/pages/register/register.component';

export const routes: Routes = [
  {path: 'feed', component: FeedComponent, canActivate: [authGuard]},
  {path: '', redirectTo: 'feed', pathMatch: 'full'},
  {path: 'users', component: UsersComonent,  canActivate: [authGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'profile/:id', component: ProfileComponent, loadChildren: () => import('./features/profile/pages/profile.routes').then(p => p.profileRoutes), canActivate: [authGuard]},
  {path: 'post', loadChildren: () => import('./features/post/pages/post.routes').then(p => p.postRoutes), canActivate: [authGuard]},
  {path: '**', component: NotFoundComponent}
];
