import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainHeaderBarComponent } from './components/main-header-bar/main-header-bar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainHeaderBarComponent,
    MainContentComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
