import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnewayStringInterpolationComponent } from './MyComponents/oneway-string-interpolation/oneway-string-interpolation.component';
import { OnewayEventBindingComponent } from './MyComponents/oneway-event-binding/oneway-event-binding.component';
import { OnewayPropertyBindingComponent } from './MyComponents/oneway-property-binding/oneway-property-binding.component';
import { OnewayAttributeBindingComponent } from './MyComponents/oneway-attribute-binding/oneway-attribute-binding.component';
import { OnewayClassBindingComponent } from './MyComponents/oneway-class-binding/oneway-class-binding.component';
import { OnewayStyleBindingComponent } from './MyComponents/oneway-style-binding/oneway-style-binding.component';
import { TwowayDataBindingComponent } from './MyComponents/twoway-data-binding/twoway-data-binding.component';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './MyComponents/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    OnewayStringInterpolationComponent,
    OnewayEventBindingComponent,
    OnewayPropertyBindingComponent,
    OnewayAttributeBindingComponent,
    OnewayClassBindingComponent,
    OnewayStyleBindingComponent,
    TwowayDataBindingComponent,
    TaskComponent
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
