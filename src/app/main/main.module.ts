import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {MainComponent} from './main.component';
import {UsersComponent} from '../components/users/users.component';
import {ProfileComponent} from '../components/profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [
    ProfileComponent,
    UsersComponent,
    MainComponent,
  ]
})
export class MainModule { }
