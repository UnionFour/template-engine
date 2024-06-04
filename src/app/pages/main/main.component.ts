import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { coacheslist, posterslist, servicesList } from '../../core/mock';
import { InstructorCardComponent } from './instructors-section/instructor-card/instructor-card.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { MapModule } from "./map-section/map/map.module";
import  config  from '../../../../config.json';
import { NewsCardComponent } from './news-section/news-carousel/news-card/news-card.component';
import { NewsCarouselComponent } from './news-section/news-carousel/news-carousel.component';
import { NewsSectionComponent } from './news-section/news-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { HeroImageSectionComponent } from './hero-image-section/hero-image-section.component';
import { MapSectionComponent } from './map-section/map-section.component';
import { InstructorsSectionComponent } from './instructors-section/instructors-section.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    LayoutComponent,
    NgOptimizedImage,
    NewsCardComponent,
    InstructorCardComponent,
    ServiceCardComponent,
    MapModule,
    NewsCarouselComponent,
    NgIf,
    NewsSectionComponent,
    AboutSectionComponent,
    HeroImageSectionComponent,
    MapSectionComponent,
    InstructorsSectionComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{
  constructor() {}

  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    // this.dataService.getData().pipe(
    //   takeUntilDestroyed(this.destroyRef)
    // ).subscribe((data) => {
    //   console.log(data)
    //   this.data = data
    // } )

    console.log(config)
  }

  // public data: any = data;

  public postersList = posterslist;
  protected readonly coacheslist = coacheslist;
  protected readonly servicesList = servicesList;

  protected readonly config = config;
}
