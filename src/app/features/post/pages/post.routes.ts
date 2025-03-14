import { Routes } from "@angular/router";
import { PostDetailsComponent } from "./post-details/post-details.component";
import { EditPostComponent } from "../components/edit-post/edit-post.component";

export const postRoutes : Routes = [
{
   path: ':id/details',
   component: PostDetailsComponent
},
{
  path: ':id/edit',
  component: EditPostComponent
}]