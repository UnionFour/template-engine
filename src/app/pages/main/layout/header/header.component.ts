import { Component } from '@angular/core';
import { NAVIGATION_ITEMS } from './header-navigation';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public navigation = NAVIGATION_ITEMS;

}
