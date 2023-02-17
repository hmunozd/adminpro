import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-setings',
  templateUrl: './account-setings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    private settings: SettingsService
  ) { }

  ngOnInit(): void {
    this.settings.checkCurrentTheme();
  }

  changeTheme(theme: string) {
    this.settings.changeTheme(theme);
  }

}
