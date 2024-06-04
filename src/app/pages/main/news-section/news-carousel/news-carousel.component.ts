import { Component, Input, OnInit } from '@angular/core';
import { TuiCarouselModule, TuiIslandModule, TuiMarkerIconModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';
import { NewsCardComponent } from './news-card/news-card.component';
import { NgIf } from '@angular/common';
import { News } from '../../../../core/models/news/news';

@Component({
  selector: 'app-news-carousel',
  standalone: true,
  imports: [
    TuiIslandModule,
    TuiLoaderModule,
    TuiMarkerIconModule,
    TuiButtonModule,
    TuiCarouselModule,
    NewsCardComponent,
    NgIf
  ],
  templateUrl: './news-carousel.component.html',
  styleUrl: './news-carousel.component.scss'
})
export class NewsCarouselComponent {
  @Input() public newsList: News[] = [];

  private itemsCountDefault = 3;

  public get showButtons() {
    return this.newsList.length > this.itemsCountDefault
  }

  public get itemsCount() {
    return this.newsList.length < this.itemsCountDefault ? this.newsList.length
      : this.itemsCountDefault;
  }
}
