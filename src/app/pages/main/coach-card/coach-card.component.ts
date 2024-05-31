import { Component, Input } from '@angular/core';
import { Coach } from '../../../core/models/coach';

@Component({
  selector: 'app-coach-card',
  standalone: true,
  imports: [
  ],
  templateUrl: './coach-card.component.html',
  styleUrl: './coach-card.component.scss'
})
export class CoachCardComponent {
  @Input() coach!: Coach;
}
