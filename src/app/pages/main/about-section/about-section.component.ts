import { Component, Input } from '@angular/core';
import { ContentSectionComponent } from '../../../shared/components/content-section/content-section.component';
import {
  ContentSectionContainerComponent
} from '../../../shared/components/content-section-container/content-section-container.component';
import { NewsCarouselComponent } from '../news-section/news-carousel/news-carousel.component';
import { NgIf } from '@angular/common';
import { AboutSection } from '../../../core/models/about/aboutSection';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [
    ContentSectionComponent,
    ContentSectionContainerComponent,
    NewsCarouselComponent,
    NgIf
  ],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {
  @Input() public aboutSection!: AboutSection;

  public get displaySection() {
    return this.aboutSection && this.aboutSection.title
      && this.aboutSection.text;
  }
}
