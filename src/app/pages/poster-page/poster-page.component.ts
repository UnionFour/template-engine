import { Component, OnInit } from '@angular/core';
import {
  ContainerComponent
} from '../../shared/components/container/container.component';
import { ContentSectionComponent } from '../../shared/components/content-section/content-section.component';
import { map, Observable } from 'rxjs';
import { News } from '../../core/models/news/news';
import { ActivatedRoute, Router } from '@angular/router';
import  config  from '../../../../config.json';
import { AsyncPipe } from '@angular/common';
import { TuiButtonModule } from '@taiga-ui/core';


@Component({
  selector: 'app-poster-page',
  standalone: true,
  imports: [
    ContainerComponent,
    ContentSectionComponent,
    AsyncPipe,
    TuiButtonModule
  ],
  templateUrl: './poster-page.component.html',
  styleUrl: './poster-page.component.scss'
})
export class PosterPageComponent implements OnInit{
  public readonly config = config;

  public poster$!: Observable<News | undefined>;

  public imgPath = '';

  private posterIndex!: number;
  private defaultPath = 'assets/news';
  private imgType = '.jpg'

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit() {
    window.scrollTo(0, 0);
    this.poster$ = this.activatedRoute.params
      .pipe(
        map((params) => {
          this.posterIndex = +params['index'];
          this.imgPath = [this.defaultPath, this.posterIndex, this.imgType].join('');
          return config.news.news[this.posterIndex];
        }),
      )
  }

  public goMain() {
    this.router.navigate(['']).then()
  }
}
