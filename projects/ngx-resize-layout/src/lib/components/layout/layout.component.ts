import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ErcLayoutConfig } from '../../models/resize.model';

@Component({
  selector: 'erc-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErcLayoutComponent {
  @Input() config!: ErcLayoutConfig;
}
