import { Routes } from '@angular/router';

import { LoginComponent } from './auth/components/login/login.component';
import { UserComponent } from './auth/components/user/user.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { UserResolver } from './auth/components/user/user.resolver';
import { AuthGuard } from './auth/services/auth.guard';
import { InventoryComponent } from './articles/components/inventory/inventory.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { StoreService } from './auth/services/store.service';
import { MapsComponent } from './maps/maps.component';



export const rootRouterConfig: Routes = [
  { path: 'home', component: InventoryComponent },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}},
  { path: 'register', component: RegisterComponent},
  {path: 'maps',component: MapsComponent}
];
