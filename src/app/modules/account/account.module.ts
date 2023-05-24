import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { UserRandomComponent } from './components/ui/user-random/user-random.component';
import { UserContainerSingleComponent } from './components/feature/user-container-single/user-container-single.component';
import { AccountHomeComponent } from './pages/account-home/account-home.component';

@NgModule({
  declarations: [
    UserRandomComponent,
    UserContainerSingleComponent,
    AccountHomeComponent,
  ],
  imports: [CommonModule, AccountRoutingModule],
})
export class AccountModule {}
