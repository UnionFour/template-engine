import { Component, Input } from '@angular/core';
import { ServiceCardComponent } from './service-card/service-card.component';
import { Service } from '../../../../core/models/services/service';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [
    ServiceCardComponent
  ],
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.scss'
})
export class ServicesListComponent {
  @Input() public servicesList: Service[] = [];
}
