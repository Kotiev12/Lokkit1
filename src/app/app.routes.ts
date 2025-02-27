import { Routes } from '@angular/router';
import { FeedComponent } from './features/post/pages/feed/feed.component';
import { UserComponent } from './features/user/pages/user/user.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { ProfileComponent } from './features/profile/pages/profile/profile.component';

export const routes: Routes = [
  {path: 'feed', component: FeedComponent},
  {path: '', redirectTo: 'feed', pathMatch: 'full'},
  {path: 'users', component: UserComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'post', loadChildren: () => import('./features/post/pages/post.routes').then(p => p.postRoutes)},
  {path: '**', component: NotFoundComponent}
];
