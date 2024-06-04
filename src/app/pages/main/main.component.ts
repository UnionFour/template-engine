import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { coacheslist, posterslist, servicesList } from '../../core/mock';
import { CoachCardComponent } from './coach-card/coach-card.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { MapModule } from "./map/map.module";
import  config  from '../../../../config.json';
import { NewsCardComponent } from './news-section/news-carousel/news-card/news-card.component';
import { NewsCarouselComponent } from './news-section/news-carousel/news-carousel.component';
import { NewsSectionComponent } from './news-section/news-section.component';
import { MainSectionComponent } from './about-section/main-section.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    LayoutComponent,
    NgOptimizedImage,
    NewsCardComponent,
    CoachCardComponent,
    ServiceCardComponent,
    MapModule,
    NewsCarouselComponent,
    NgIf,
    NewsSectionComponent,
    MainSectionComponent
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
