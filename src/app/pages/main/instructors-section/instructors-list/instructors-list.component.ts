import { Component, Input } from '@angular/core';
import { InstructorCardComponent } from '../instructor-card/instructor-card.component';
import { Instructor } from '../../../../core/models/instructors/instructor';

@Component({
  selector: 'app-instructors-list',
  standalone: true,
  imports: [
    InstructorCardComponent
  ],
  templateUrl: './instructors-list.component.html',
  styleUrl: './instructors-list.component.scss'
})
export class InstructorsListComponent {

  @Input() public instructorsList: Instructor[] = [];
}
