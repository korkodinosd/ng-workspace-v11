import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


import { UsersPageRoutingModule } from './users-page-routing.module';


import { UsersPageComponent } from './users-page/users-page.component';
import { UsersTotalComponent } from './users-total/users-total.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { SharedStateUsersModule } from './state/shared-state-users/shared-state-users.module';
import { EffectsModule } from '@ngrx/effects';
import { UsersApiEffectsService } from './state/effects/users-api-effects.service';


@NgModule({
  imports: [
    UsersPageRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    SharedStateUsersModule,
    EffectsModule.forFeature([UsersApiEffectsService]),
  ],
  declarations: [
    UsersPageComponent,
    UsersTotalComponent,
    UsersListComponent,
    UserDetailComponent,
  ],
})
export class UsersPageModule {}