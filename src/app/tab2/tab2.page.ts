import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  isAuthenticated: any = false;
  user: User = new User();
  constructor( private userService: UserService, private router: Router, private loadindCtrl: LoadingController) {}

  ngOnInit(): void {
    this.validateIsAuthenticated();
  }

  async validateIsAuthenticated() {
    const loading = await this.loadindCtrl.create({
      spinner: 'bubbles',
    });
    await loading.present();
    if (localStorage.getItem('isAuthenticated')) {
      loading.dismiss();
      this.router.navigate(['/tabs/tab3']);
    }
    console.log('no esta autenticado');
  }
  validateUser(): void {
    this.userService
      .validationUser(this.user.email, this.user.password)
      .subscribe((data) => {
        this.isAuthenticated = data;
        localStorage.setItem('isAuthenticated', this.isAuthenticated);
        localStorage.setItem('email', this.user.email);
        this.router.navigate(['/tabs/tab3']);
      });
  }
}
