import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { DynamicReactiveFormComponent } from './dynamic-reactive-form/dynamic-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    TemplateDrivenFormComponent,
    DynamicReactiveFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
