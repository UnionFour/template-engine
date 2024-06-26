import { Component, Input } from '@angular/core';

import { NgIf, NgOptimizedImage } from '@angular/common';
import { News } from '../../../../../core/models/news/news';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    RouterLink
  ],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss'
})
export class NewsCardComponent {
  @Input() public news!: News;
  @Input() public newsIndex!: number;

}
