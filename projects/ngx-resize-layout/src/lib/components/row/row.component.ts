import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { ErcLayoutInfo, ErcRowConfig } from '../../models/resize.model';
import { ErcBaseUnitComponent } from '../base-unit/base-unit.component';
import { LayoutService } from '../../layout.service';
import { ErcColComponent } from '../col/col.component';

@Component({
  selector: 'erc-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErcRowComponent
  extends ErcBaseUnitComponent
  implements OnInit, AfterContentInit, AfterViewInit
{
  @ContentChildren(ErcColComponent) private _ercCols!: QueryList<ErcColComponent>;

  @Input() config!: ErcRowConfig;

  constructor(_layout: LayoutService) {
    super(_layout);

    this.type = 'row';
  }

  ngOnInit(): void {
    console.log('erc-row ngOnInit', { index: this.index, first: this.first, last: this.last });
  }

  ngAfterContentInit(): void {
    this.layoutService.setLayoutInfoForChild(this._ercCols.toArray());

    console.log('erc-row ngAfterContentInit', this._ercCols.length);
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();

    // position info is first received on AfterViewInit
    console.log('erc-row ngAfterViewInit', {
      layer: this.layer,
      index: this.index,
      first: this.first,
      last: this.last,
    });
  }
}
