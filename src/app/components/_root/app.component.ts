import { Component, signal } from '@angular/core';
import { PotListComponent } from '../pots/pots.component';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  imports: [PotListComponent],
  templateUrl: './app.component.html'
})
export class App {
  protected readonly title = signal('HTTP_API_fetch()');
}
