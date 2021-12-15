import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CountriesModule } from './countries/countries.module';
import { SharedModule } from './shared/shared.module';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipePipe,

  ],
  imports: [
    BrowserModule,
    CountriesModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
