import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template:`
    <div class="card">
        <ng-content></ng-content>
    </div>
  `,
  styleUrl: './card.component.scss'
})
export class CardComponent {

}
