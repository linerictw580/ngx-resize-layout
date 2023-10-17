import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'erc-handle',
  templateUrl: './handle.component.html',
  styleUrls: ['./handle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErcHandleComponent {
  @Input() position!: ErcHandlePosition;
}

export type ErcHandlePosition = 'left' | 'right' | 'top' | 'bottom';
