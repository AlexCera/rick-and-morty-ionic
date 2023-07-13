import { Component } from '@angular/core';
import { NavigationService } from '@services/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navigationService: NavigationService) { }

  navigate(route: string) {
    this.navigationService.navigate(route)
  }

}