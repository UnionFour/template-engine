import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { NgOptimizedImage } from '@angular/common';
import { PosterCardComponent } from './poster-card/poster-card.component';
import { posterslist } from '../../core/mock';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    LayoutComponent,
    NgOptimizedImage,
    PosterCardComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  public postersList = posterslist;
}
