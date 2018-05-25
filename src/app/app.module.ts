import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarComponent } from './components/bar/bar.component';
import { BazComponent } from './components/baz/baz.component';
import { FooService } from './components/foo.service';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    BazComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FooService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
