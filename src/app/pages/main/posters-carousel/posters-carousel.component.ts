import { Component, Input, OnInit } from '@angular/core';
import { TuiCarouselModule, TuiIslandModule, TuiMarkerIconModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';
import { PosterCardComponent } from './poster-card/poster-card.component';
import { Poster } from '../../../core/models/poster';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-posters-carousel',
  standalone: true,
  imports: [
    TuiIslandModule,
    TuiLoaderModule,
    TuiMarkerIconModule,
    TuiButtonModule,
    TuiCarouselModule,
    PosterCardComponent,
    NgIf
  ],
  templateUrl: './posters-carousel.component.html',
  styleUrl: './posters-carousel.component.scss'
})
export class PostersCarouselComponent{
  @Input() posters: Poster[] = [];

  private itemsCountDefault = 3;

  public get showButtons() {
    return this.posters.length > this.itemsCountDefault
  }
  
  public get itemsCount() {
    return this.posters.length < this.itemsCountDefault ? this.posters.length
      : this.itemsCountDefault;
  }
}
