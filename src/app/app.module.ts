import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { GoogleMapComponent } from './google-map/google-map.component';







@NgModule({
  declarations: [AppComponent, GoogleMapComponent],
  entryComponents: [],
  imports: [BrowserModule, GooglePlaceModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [SocialSharing, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
