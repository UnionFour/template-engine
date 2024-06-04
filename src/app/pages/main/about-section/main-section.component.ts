import { Component, Input } from '@angular/core';
import { ContentSectionComponent } from '../../../shared/components/content-section/content-section.component';
import {
  ContentSectionContainerComponent
} from '../../../shared/components/content-section-container/content-section-container.component';
import { NewsCarouselComponent } from '../news-section/news-carousel/news-carousel.component';
import { NgIf } from '@angular/common';
import { MainSection } from '../../../core/models/about/mainSection';
import config from '../../../../../config.json';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [
    ContentSectionComponent,
    ContentSectionContainerComponent,
    NewsCarouselComponent,
    NgIf
  ],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {
  @Input() public mainSection!: MainSection;

  public get displaySection() {
    return this.mainSection && this.mainSection.title && this.mainSection.text;
  }

  protected readonly config = config;
}
