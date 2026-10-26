import { Component, signal } from '@angular/core';
import { PotListComponent } from '../pots/pots.component';
import { PotDetailsComponent } from '../potDetails/potDetails.component';

@Component({
  selector: 'app-root',
  imports: [
    PotListComponent,
    PotDetailsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {
  protected readonly title = signal('Plant_lst');
}
