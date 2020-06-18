import { Component } from '@angular/core';
import { Goal } from './goal';
import { NotFoundComponent } from './not-found/not-found.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goals: string[];
}
