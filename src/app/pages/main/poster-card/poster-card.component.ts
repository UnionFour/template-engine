import { Component, Input } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'app-poster-card',
  standalone: true,
    imports: [
        CardComponent
    ],
  templateUrl: './poster-card.component.html',
  styleUrl: './poster-card.component.scss'
})
export class PosterCardComponent {

}
