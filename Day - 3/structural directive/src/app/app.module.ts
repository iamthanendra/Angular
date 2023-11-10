import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IfComponent } from './MyComponents/if/if.component';
import { IfElseComponent } from './MyComponents/if-else/if-else.component';
import { ForComponent } from './MyComponents/for/for.component';
import { SwitchComponent } from './MyComponents/switch/switch.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IfComponent,
    IfElseComponent,
    ForComponent,
    SwitchComponent
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
