import { Component, Input } from '@angular/core';
import { ContentSectionComponent } from '../../../shared/components/content-section/content-section.component';
import { ContentSectionContainerComponent } from '../../../shared/components/content-section-container/content-section-container.component';
import { NewsCarouselComponent } from './news-carousel/news-carousel.component';
import { NgIf } from '@angular/common';
import { NewsSection } from '../../../core/models/news/newsSection';
import config from '../../../../../config.json';

@Component({
  selector: 'app-news-section',
  standalone: true,
  imports: [
    ContentSectionComponent,
    ContentSectionContainerComponent,
    NewsCarouselComponent,
    NgIf
  ],
  templateUrl: './news-section.component.html',
  styleUrl: './news-section.component.scss'
})
export class NewsSectionComponent {
  @Input() public newsSection!: NewsSection;

  public get displaySection() {
    return this.newsSection && this.newsSection.title && this.newsSection.news;
  }
}
