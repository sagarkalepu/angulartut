import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  {BasicHighlighting} from "./directives/basicHighlighting";
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { OtherThanDirective } from './other-than.directive';

@NgModule({
  declarations: [
    AppComponent,
		BasicHighlighting,
		BetterHighlightDirective,
		OtherThanDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
