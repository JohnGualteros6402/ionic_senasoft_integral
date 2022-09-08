import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterUserPage } from './register-user.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterUserPageRoutingModule {}
