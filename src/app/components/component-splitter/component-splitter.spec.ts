import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentSplitter } from './component-splitter';

describe('ComponentSplitter', () => {
  let fixture: ComponentFixture<ComponentSplitter>;
  let host: HTMLElement;
  let deltas: number[];
  let resets: number;

  const pointer = (type: string, clientX: number) =>
    host.dispatchEvent(new PointerEvent(type, { clientX, pointerId: 1, button: 0, bubbles: true }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentSplitter],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentSplitter);
    host = fixture.nativeElement as HTMLElement;
    host.setPointerCapture = () => {};
    host.releasePointerCapture = () => {};

    deltas = [];
    resets = 0;
    fixture.componentInstance.resized.subscribe(delta => deltas.push(delta));
    fixture.componentInstance.reset.subscribe(() => resets++);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should emit pointer movement while dragging', () => {
    pointer('pointerdown', 100);
    pointer('pointermove', 90);
    pointer('pointermove', 95);
    pointer('pointerup', 95);
    pointer('pointermove', 50);

    expect(deltas).toEqual([-10, 5]);
  });

  it('should ignore movement without pointerdown', () => {
    pointer('pointermove', 50);

    expect(deltas).toEqual([]);
  });

  it('should emit steps for arrow keys', () => {
    host.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
    host.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }));

    expect(deltas).toEqual([-16, 16]);
  });

  it('should emit reset on double click', () => {
    host.dispatchEvent(new MouseEvent('dblclick'));

    expect(resets).toBe(1);
  });
});
