import { Component, Input } from '@angular/core';
import { Service } from '../../../../../core/models/services/service';
@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input() public service!: Service;
}
