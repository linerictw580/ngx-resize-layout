import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'erc-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErcRowComponent {}
