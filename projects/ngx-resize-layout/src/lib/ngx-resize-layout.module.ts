import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErcLayoutComponent } from './components/layout/layout.component';
import { ErcColComponent } from './components/col/col.component';
import { ErcRowComponent } from './components/row/row.component';

@NgModule({
  declarations: [ErcLayoutComponent, ErcColComponent, ErcRowComponent],
  imports: [CommonModule],
  exports: [ErcLayoutComponent],
})
export class NgxResizeLayoutModule {}
