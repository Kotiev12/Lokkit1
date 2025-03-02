import { Routes } from "@angular/router";
import { ProfileComponent } from "../../profile/pages/profile/profile.component";

export const postRoutes : Routes = [
{
   path: ':id/profile',
   component: ProfileComponent
}]