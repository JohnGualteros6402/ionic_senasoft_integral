import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterUserPageRoutingModule } from './register-user-routing.module';

import { RegisterUserPage } from './register-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterUserPageRoutingModule
  ],
  declarations: [RegisterUserPage]
})
export class RegisterUserPageModule {}
