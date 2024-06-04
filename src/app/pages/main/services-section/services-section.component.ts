import { Component, Input } from '@angular/core';
import { ContentSectionComponent } from '../../../shared/components/content-section/content-section.component';
import {
  ContentSectionContainerComponent
} from '../../../shared/components/content-section-container/content-section-container.component';
import { NewsCarouselComponent } from '../news-section/news-carousel/news-carousel.component';
import { NgIf } from '@angular/common';
import { ServicesSection } from '../../../core/models/services/servicesSection';
import { InstructorsListComponent } from '../instructors-section/instructors-list/instructors-list.component';
import { ServicesListComponent } from './services-list/services-list.component';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [
    ContentSectionComponent,
    ContentSectionContainerComponent,
    NewsCarouselComponent,
    NgIf,
    InstructorsListComponent,
    ServicesListComponent
  ],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {
  @Input() public servicesSection!: ServicesSection;

  public get displaySection() {
    return this.servicesSection && this.servicesSection.title
      && this.servicesSection.services;
  }
}
