import { Routes } from "@angular/router";
import { ProfileInfoComponent } from "./profile-info/profile-info.component";
import { ProfileSettingsComponent } from "./profile-settings/profile-settings.component";
import { ProfileDevicesComponent } from "./profile-devices/profile-devices.component";

export const profileRoutes : Routes = [
{
   path: 'info',
   component: ProfileInfoComponent,
},
{
  path: 'settings',
   component: ProfileSettingsComponent,
},
{
  path: 'devices',
   component: ProfileDevicesComponent,
}]