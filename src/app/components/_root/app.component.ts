import { ChangeDetectionStrategy, Component, ElementRef, computed, signal, viewChild } from '@angular/core';
import { PotListComponent } from '../pots/pots.component';
import { PotDetailsComponent } from '../potDetails/potDetails.component';
import { ComponentSplitter } from '../component-splitter/component-splitter';

const MIN_DETAILS_WIDTH_PX = 320;

@Component({
  selector: 'app-root',
  imports: [
    PotListComponent,
    PotDetailsComponent,
    ComponentSplitter
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('Plant manager - panel');

  private readonly detailsPanel = viewChild.required<ElementRef<HTMLElement>>('detailsPanel');
  private readonly detailsWidth = signal<number | null>(null);

  // Null falls back to the default width defined in SCSS.
  protected readonly detailsWidthCss = computed(() => {
    const width = this.detailsWidth();
    return width === null ? null : `${width}px`;
  });

  protected onDetailsResized(delta: number): void {
    // Rendered width is the base, so CSS min/max limits never leave a dead zone while dragging.
    const current = this.detailsPanel().nativeElement.getBoundingClientRect().width;
    this.detailsWidth.set(Math.max(MIN_DETAILS_WIDTH_PX, current - delta));
  }

  protected onDetailsReset(): void {
    this.detailsWidth.set(null);
  }
}
