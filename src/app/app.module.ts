import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcompComponent } from './rxjs_example/sharingbetweencomponent/acomp/acomp.component';
import { BcompComponent } from './rxjs_example/sharingbetweencomponent/bcomp/bcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    AcompComponent,
    BcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
