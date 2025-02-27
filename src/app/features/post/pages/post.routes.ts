import { Routes } from "@angular/router";
import { PostDetailsComponent } from "./post-details/post-details.component";

export const postRoutes : Routes = [
{
   path: ':id/details',
   component: PostDetailsComponent
}]