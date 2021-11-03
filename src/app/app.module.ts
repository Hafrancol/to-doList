import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './to-do-list/main-page/main-page.component';
import { ToDoListModule } from './to-do-list/to-do-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
		ToDoListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
