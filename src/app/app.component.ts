import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor() {}

  // methos it's called when the server is started and called two functions
  ngOnInit(): void {
      this.validateIfPrefersDark();
      this.validateIfExistDarkModeInLocalStorage();
  }
  // validate if preferences mode dark in the browser
  validateIfPrefersDark(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(prefersDark.matches);
    if (prefersDark.matches) {
      document.body.classList.toggle('dark');
    }
  }
  // click event for change the mode || theme color
  clickDarkMode(){
    document.body.classList.toggle('dark');
    localStorage.setItem('prefers-color-scheme', 'dark');
  }
  // save the prefers-color-scheme in localStorage and condition
  //if already exist then add the class in the body tag

  validateIfExistDarkModeInLocalStorage(){
    if(localStorage.getItem('prefers-color-scheme') === 'dark'){
      document.body.classList.toggle('dark');
    }
  }
}
