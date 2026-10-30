import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';

const KEYBOARD_STEP_PX = 16;

@Component({
  selector: 'app-component-splitter',
  styleUrl: './component-splitter.scss',
  templateUrl: './component-splitter.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'separator',
    'aria-orientation': 'vertical',
    'aria-label': 'Zmień szerokość panelu',
    tabindex: '0',
    '[class.dragging]': 'dragging()',
    '(pointerdown)': 'onPointerDown($event)',
    '(pointermove)': 'onPointerMove($event)',
    '(pointerup)': 'onPointerEnd($event)',
    '(pointercancel)': 'onPointerEnd($event)',
    '(keydown)': 'onKeyDown($event)',
    '(dblclick)': 'reset.emit()',
  },
})
export class ComponentSplitter {
  /** Horizontal movement in px; negative means towards the left. */
  readonly resized = output<number>();
  readonly reset = output<void>();

  protected readonly dragging = signal(false);
  private lastX = 0;

  protected onPointerDown(event: PointerEvent): void {
    if (event.button !== 0) {
      return;
    }
    // Prevents text selection while dragging.
    event.preventDefault();
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
    this.lastX = event.clientX;
    this.dragging.set(true);
  }

  protected onPointerMove(event: PointerEvent): void {
    if (!this.dragging()) {
      return;
    }
    const delta = event.clientX - this.lastX;
    this.lastX = event.clientX;
    if (delta !== 0) {
      this.resized.emit(delta);
    }
  }

  protected onPointerEnd(event: PointerEvent): void {
    if (!this.dragging()) {
      return;
    }
    (event.currentTarget as HTMLElement).releasePointerCapture(event.pointerId);
    this.dragging.set(false);
  }

  protected onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.resized.emit(-KEYBOARD_STEP_PX);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.resized.emit(KEYBOARD_STEP_PX);
    }
  }
}
