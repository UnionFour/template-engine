import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { NgOptimizedImage } from '@angular/common';
import { PosterCardComponent } from './posters-carousel/poster-card/poster-card.component';
import { coacheslist, posterslist, servicesList } from '../../core/mock';
import { CoachCardComponent } from './coach-card/coach-card.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { MapModule } from "./map/map.module";
import { PostersCarouselComponent } from './posters-carousel/posters-carousel.component';

@Component({
    selector: 'app-main',
    standalone: true,
  imports: [
    LayoutComponent,
    NgOptimizedImage,
    PosterCardComponent,
    CoachCardComponent,
    ServiceCardComponent,
    MapModule,
    PostersCarouselComponent
  ],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss'
})
export class MainComponent {
    public postersList = posterslist;
    protected readonly coacheslist = coacheslist;
    protected readonly servicesList = servicesList;
}
