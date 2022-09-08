import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  email: string = localStorage.getItem('email');
  users: User[];

  constructor(private userService: UserService, private loadindCtrl: LoadingController) {}
  ngOnInit(): void {
      this.getUsers();
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
