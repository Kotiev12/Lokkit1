import { Routes } from '@angular/router';
import { FeedComponent } from './features/post/pages/feed/feed.component';
import { UserComponent } from './features/user/pages/user/user.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

export const routes: Routes = [
  {path: 'feed', component: FeedComponent},
  {path: '', redirectTo: 'feed', pathMatch: 'full'},
  {path: 'users', component: UserComponent},
  {path: '**', component: NotFoundComponent}
];
