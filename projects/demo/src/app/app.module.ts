import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxResizeLayoutModule } from 'ngx-resize-layout';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxResizeLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
