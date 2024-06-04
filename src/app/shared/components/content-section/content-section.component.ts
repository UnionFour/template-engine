import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-content-section',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './content-section.component.html',
  styleUrl: './content-section.component.scss'
})
export class ContentSectionComponent {

}
