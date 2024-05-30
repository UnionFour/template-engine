import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { NgOptimizedImage } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';
import { PosterCardComponent } from './poster-card/poster-card.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    LayoutComponent,
    NgOptimizedImage,
    CardComponent,
    PosterCardComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
