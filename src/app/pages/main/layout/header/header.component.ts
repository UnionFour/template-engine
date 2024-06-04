import { Component } from '@angular/core';
import { NAVIGATION_ITEMS } from './header-navigation';
import { ContainerComponent } from '../../../../shared/components/conteiner/container.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ContainerComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public navigation = NAVIGATION_ITEMS;

}
