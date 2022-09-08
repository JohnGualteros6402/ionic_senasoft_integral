import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  email: string = localStorage.getItem('email');
  users: User[];

  constructor(private userService: UserService,private router: Router, private loadindCtrl: LoadingController) {}
  ngOnInit(): void {
      this.getUsers();
      this.validateIfExistUser();
  }
  validateIfExistUser(){
    if(localStorage.getItem('isAuthenticated')){
      return;
    }
    this.router.navigate(['/tabs/tab2']);
  }
  logout(){
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('email');
  }
  private async getUsers(){
    const loading = await this.loadindCtrl.create({
      spinner: 'bubbles',
    });
    await loading.present();
    this.userService.getListUsers().subscribe(data=>{
      loading.dismiss();
      this.users = data;
      console.log(this.users);
    });
  }

}
