import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, UrlSegment } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

  @NgModule({
    declarations: [
      AppComponent,
      TestComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot([
        {
          matcher(segments: UrlSegment[]) {
            if (segments.length) {
              return {
                consumed: [segments[0]],
              };
            } else {
              return undefined;
            }
          },
          component: TestComponent,
        }
      ])
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
