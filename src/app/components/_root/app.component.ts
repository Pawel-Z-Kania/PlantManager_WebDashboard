import { Component, signal } from '@angular/core';
import { PotListComponent } from '../pots/pots.component';

@Component({
  selector: 'app-root',
  imports: [
    PotListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {
  protected readonly title = signal('Plant_lst');
}
