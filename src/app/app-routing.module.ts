import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {ForgotComponent} from './components/forgot/forgot.component';
import {CredentialComponent} from './components/credential/credential.component';
import {AuthGuard} from './auth.guard';
import {ShowpassGuard} from './showpass.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/sign-in',
    pathMatch: 'full',
  },
  {
    path: 'app',
    loadChildren: './main/main.module#MainModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'sign-in',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sign-up',
    component: RegistrationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'forgot',
    component: ForgotComponent,
    children: [
      {
        path: 'reset',
        component: CredentialComponent,
        canActivate: [ShowpassGuard],
      }
    ]
  },
  {
    path: '**',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
