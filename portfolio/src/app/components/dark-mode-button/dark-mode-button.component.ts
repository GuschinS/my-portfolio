import { Component } from '@angular/core';

@Component({
  selector: 'app-dark-mode-button',
  templateUrl: './dark-mode-button.component.html',
  styleUrls: ['./dark-mode-button.component.scss'],
})
export class DarkModeButtonComponent {
  changeThemeColor() {
    const body = document.getElementsByTagName('body')[0];
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
    } else {
      body.classList.add('dark-theme');
      console.log('dark-theme');
    }
    return true;
  }
}
