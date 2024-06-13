import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { InstructorCardComponent } from './instructors-section/instructors-list/instructor-card/instructor-card.component';
import { ServiceCardComponent } from './services-section/services-list/service-card/service-card.component';
import { MapModule } from "./map-section/map/map.module";
import  config  from '../../../../config.json';
import { NewsCardComponent } from './news-section/news-carousel/news-card/news-card.component';
import { NewsCarouselComponent } from './news-section/news-carousel/news-carousel.component';
import { NewsSectionComponent } from './news-section/news-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { HeroImageSectionComponent } from './hero-image-section/hero-image-section.component';
import { MapSectionComponent } from './map-section/map-section.component';
import { InstructorsSectionComponent } from './instructors-section/instructors-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { DataService } from '../../core/services/data-service';

@Component({
  selector: 'app-main-page',
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
    InstructorsSectionComponent,
    ServicesSectionComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit{
  constructor(public dataService: DataService) {}


  ngOnInit() {
    window.scrollTo(0, 0);
    // this.dataService.getData().pipe(
    //   takeUntilDestroyed(this.destroyRef)
    // ).subscribe((data) => {
    //   console.log(data)
    //   this.data = data
    // } )

  }

}
