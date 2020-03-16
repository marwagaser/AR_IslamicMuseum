import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { IdeaPageComponent } from './idea-page/idea-page.component';
import { PhotosPageComponent } from './photos-page/photos-page.component';
import { InnovateComponent } from './innovate/innovate.component';
import { CreditsPageComponent } from './credits-page/credits-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    IdeaPageComponent,
    PhotosPageComponent,
    InnovateComponent,
    CreditsPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
