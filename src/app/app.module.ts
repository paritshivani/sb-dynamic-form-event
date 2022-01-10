import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventCommonFormElementsModule, DialcodeCursor } from 'common-form-elements';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialcodeService } from './dialcode-cursor-implementation.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EventCommonFormElementsModule,
  ],
  providers: [{
    provide: DialcodeCursor,
    useClass: DialcodeService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
