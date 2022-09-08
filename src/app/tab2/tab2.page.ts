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
  // variable initialized in false for authenticate
  isAuthenticated: any = false;

  // user instance to be able to access the class data
  user: User = new User();
  constructor( private userService: UserService, private router: Router, private loadindCtrl: LoadingController) {}

  ngOnInit(): void {
    this.validateIsAuthenticated();
  }
  // async funtion for validate if is authenticated and spinner for loader
  async validateIsAuthenticated() {
    const loading = await this.loadindCtrl.create({
      spinner: 'bubbles',
    });
    await loading.present();
    if (localStorage.getItem('isAuthenticated')) {
      this.router.navigate(['/tabs/tab3']);
    }
    loading.dismiss();
    console.log('no esta autenticado');
  }
  // function for validate if the user already exists in the back end
  // should return true if the user already exists or false otherwise
  validateUser(): void {
    this.userService
      .validationUser(this.user.email, this.user.password)
      .subscribe((data) => {
        this.isAuthenticated = data;
        // save the keys in the localStorage
        localStorage.setItem('isAuthenticated', this.isAuthenticated);
        localStorage.setItem('email', this.user.email);
        // redirect to view dashboard if already logged in
        this.router.navigate(['/tabs/tab3']);
      });
  }
}
