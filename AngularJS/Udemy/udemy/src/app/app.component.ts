import { Component } from '@angular/core';
import {CoursesComponent} from './courses.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [CoursesComponent]
})
export class AppComponent {
  title = 'app works!';
}
