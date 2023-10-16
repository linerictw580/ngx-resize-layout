import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'erc-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErcColComponent {}
