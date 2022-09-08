import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor() {}

  ngOnInit(): void {
      this.validateIfPrefersDark();
      this.validateIfExistDarkModeInLocalStorage();
  }
  validateIfPrefersDark(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(prefersDark.matches);
    if (prefersDark.matches) {
      document.body.classList.toggle('dark');
    }
  }
  clickDarkMode(){
    document.body.classList.toggle('dark');
    localStorage.setItem('prefers-color-scheme', 'dark');
  }
  validateIfExistDarkModeInLocalStorage(){
    if(localStorage.getItem('prefers-color-scheme') === 'dark'){
      document.body.classList.toggle('dark');
    }
  }
}
