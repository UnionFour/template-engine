import { Component, Input } from '@angular/core';
import { Coach } from '../../../../core/models/coach';
import { Instructor } from '../../../../core/models/instructors/instructor';

@Component({
  selector: 'app-instructor-card',
  standalone: true,
  imports: [
  ],
  templateUrl: './instructor-card.component.html',
  styleUrl: './instructor-card.component.scss'
})
export class InstructorCardComponent {
  @Input() public instructor!: Instructor;
  @Input() public instructorIndex!: number;
}
