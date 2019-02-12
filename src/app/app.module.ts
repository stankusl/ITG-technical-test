import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarBlockComponent } from './car-block/car-block.component';
import { CarServiceService } from './car-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CarBlockComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CarServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
