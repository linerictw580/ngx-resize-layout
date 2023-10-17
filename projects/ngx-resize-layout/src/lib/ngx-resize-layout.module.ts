import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErcLayoutComponent } from './components/layout/layout.component';
import { ErcColComponent } from './components/col/col.component';
import { ErcRowComponent } from './components/row/row.component';
import { ErcBaseUnitComponent } from './components/base-unit/base-unit.component';
import { ErcHandleComponent } from './components/handle/handle.component';

@NgModule({
  declarations: [
    ErcLayoutComponent,
    ErcColComponent,
    ErcRowComponent,
    ErcBaseUnitComponent,
    ErcHandleComponent,
  ],
  imports: [CommonModule],
  exports: [ErcLayoutComponent, ErcRowComponent, ErcColComponent],
})
export class NgxResizeLayoutModule {}
