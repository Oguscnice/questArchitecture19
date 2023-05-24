import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountHomeComponent } from 'src/app/modules/account/pages/account-home/account-home.component';

const routes: Routes = [{ path: 'home', component: AccountHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
