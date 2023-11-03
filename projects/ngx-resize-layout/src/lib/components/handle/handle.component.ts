import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'erc-handle',
  templateUrl: './handle.component.html',
  styleUrls: ['./handle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErcHandleComponent implements OnInit {
  @HostBinding('class.erc-handle-left') handleLeft!: boolean;
  @HostBinding('class.erc-handle-right') handleRight!: boolean;
  @HostBinding('class.erc-handle-top') handleTop!: boolean;
  @HostBinding('class.erc-handle-bottom') handleBottom!: boolean;
  @Input() position!: ErcHandlePosition;

  ngOnInit(): void {
    this.handleLeft = this.position === 'left';
    this.handleRight = this.position === 'right';
    this.handleTop = this.position === 'top';
    this.handleBottom = this.position === 'bottom';
  }
}

export type ErcHandlePosition = 'left' | 'right' | 'top' | 'bottom';
