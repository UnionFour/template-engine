import { Component, Input } from '@angular/core';
import { ContentSectionComponent } from '../../../shared/components/content-section/content-section.component';
import {
  ContainerComponent
} from '../../../shared/components/container/container.component';
import { NewsCarouselComponent } from '../news-section/news-carousel/news-carousel.component';
import { NgIf } from '@angular/common';
import { MapModule } from './map/map.module';
import { MapSection } from '../../../core/models/map/mapSection';

@Component({
  selector: 'app-map-section',
  standalone: true,
  imports: [
    ContentSectionComponent,
    ContainerComponent,
    NewsCarouselComponent,
    NgIf,
    MapModule
  ],
  templateUrl: './map-section.component.html',
  styleUrl: './map-section.component.scss'
})
export class MapSectionComponent {
  @Input() public mapSection!: MapSection;

  public get displaySection() {
    return this.mapSection && this.mapSection.title
      && this.mapSection.addresses;
  }
}
