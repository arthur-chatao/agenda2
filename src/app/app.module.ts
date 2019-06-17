import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDtDM3QZwU6MGa-5tx1VokcD3nNX-34vvE",
      authDomain: "agenda2-40f1d.firebaseapp.com",
      databaseURL: "https://agenda2-40f1d.firebaseio.com",
      projectId: "agenda2-40f1d",
      storageBucket: "agenda2-40f1d.appspot.com",
      messagingSenderId: "894886655389",
      appId: "1:894886655389:web:eb24c8150469c53a"
    }), AngularFireDatabaseModule, 

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
