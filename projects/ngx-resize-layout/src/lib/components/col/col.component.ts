import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  HostBinding,
  Input,
  QueryList,
} from '@angular/core';
import { ErcBaseUnitComponent } from '../base-unit/base-unit.component';
import { ErcColConfig, ErcLayoutInfo } from '../../models/resize.model';
import { ErcRowComponent } from '../row/row.component';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'erc-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErcColComponent
  extends ErcBaseUnitComponent
  implements AfterContentInit, AfterViewInit
{
  @ContentChildren(ErcRowComponent) private _ercRows!: QueryList<ErcRowComponent>;

  @Input() config!: ErcColConfig;

  constructor(_layout: LayoutService) {
    super(_layout);

    this.type = 'column';
  }

  ngAfterContentInit(): void {
    this.layoutService.setLayoutInfoForChild(this._ercRows.toArray());

    console.log('erc-col ngAfterContentInit', this._ercRows.length);
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
    console.log('erc-col ngAfterViewInit');
  }
}
