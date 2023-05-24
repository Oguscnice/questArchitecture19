import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { UserContainerComponent } from './components/feature/user-container/user-container.component';
import { UserListComponent } from './components/ui/user-list/user-list.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    UserContainerComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
