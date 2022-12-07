import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth } from '@angular/fire/auth';
import { provideFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { getSetupAuth, getSetupFirestore } from './helpers/firestore.helpers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getSetupAuth()),
    provideFirestore(() => getSetupFirestore()),
    provideFunctions(() => getFunctions()),
    BrowserAnimationsModule, 
  ],
  providers: [
    {
      provide: APP_INITIALIZER, useFactory: (service: AuthService) => () => service.init(), 
      deps: [AuthService], 
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
