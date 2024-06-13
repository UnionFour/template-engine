import { Component, Input } from '@angular/core';
import { NAVIGATION_ITEMS } from './header-navigation';
import { Navigation } from '../../../../core/models/header/navigation';
import { DataService } from '../../../../core/services/data-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(public dataService: DataService) {
  }
  // public navigation = NAVIGATION_ITEMS;

}
