import { Component, Input } from '@angular/core';
import { InstructorSection } from '../../../core/models/instructors/instructorSection';
import { ContentSectionComponent } from '../../../shared/components/content-section/content-section.component';
import {
  ContentSectionContainerComponent
} from '../../../shared/components/content-section-container/content-section-container.component';
import { NgIf } from '@angular/common';
import { InstructorsListComponent } from './instructors-list/instructors-list.component';

@Component({
  selector: 'app-instructors-section',
  standalone: true,
  imports: [
    ContentSectionComponent,
    ContentSectionContainerComponent,
    NgIf,
    InstructorsListComponent
  ],
  templateUrl: './instructors-section.component.html',
  styleUrl: './instructors-section.component.scss'
})
export class InstructorsSectionComponent {
  @Input() public instructorSection!: InstructorSection;

  public get displaySection() {
    return this.instructorSection && this.instructorSection.title
      && this.instructorSection.instructors;
  }
}
