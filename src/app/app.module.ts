import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { DrawAndStatsComponent } from './components/draw-and-stats/draw-and-stats.component';
import { GuessOfPlayerComponent } from './components/guess-of-player/guess-of-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DrawAndStatsComponent,
    GuessOfPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
