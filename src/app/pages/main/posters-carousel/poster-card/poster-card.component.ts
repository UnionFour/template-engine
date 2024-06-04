import { Component, Input } from '@angular/core';

import { Poster } from '../../../../core/models/poster';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-poster-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './poster-card.component.html',
  styleUrl: './poster-card.component.scss'
})
export class PosterCardComponent {
  @Input() poster!: Poster;
}
