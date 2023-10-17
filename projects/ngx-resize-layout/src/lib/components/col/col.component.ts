import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ErcBaseUnitComponent } from '../base-unit/base-unit.component';
import { ErcColConfig } from '../../models/resize.model';

@Component({
  selector: 'erc-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErcColComponent extends ErcBaseUnitComponent {
  @Input() config!: ErcColConfig;

  constructor() {
    super();
  }
}
