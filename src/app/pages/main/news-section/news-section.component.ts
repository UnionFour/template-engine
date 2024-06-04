import { Component, Input } from '@angular/core';
import { ContentSectionComponent } from '../../../shared/components/content-section/content-section.component';
import { ContainerComponent } from '../../../shared/components/conteiner/container.component';
import { NewsCarouselComponent } from './news-carousel/news-carousel.component';
import { NgIf } from '@angular/common';
import { NewsSection } from '../../../core/models/news/newsSection';

@Component({
  selector: 'app-news-section',
  standalone: true,
  imports: [
    ContentSectionComponent,
    ContainerComponent,
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
