import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { NgOptimizedImage } from '@angular/common';
import { PosterCardComponent } from './poster-card/poster-card.component';
import { coacheslist, posterslist } from '../../core/mock';
import { CoachCardComponent } from './coach-card/coach-card.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    LayoutComponent,
    NgOptimizedImage,
    PosterCardComponent,
    CoachCardComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  public postersList = posterslist;
  protected readonly coacheslist = coacheslist;
}
