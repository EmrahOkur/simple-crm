import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-b3ddf","appId":"1:235415324234:web:7ecb0d651dce64a6f288b3","storageBucket":"simple-crm-b3ddf.firebasestorage.app","apiKey":"AIzaSyCpMpsYvstavUvMsDMrOHW2pbBg6tnzjwk","authDomain":"simple-crm-b3ddf.firebaseapp.com","messagingSenderId":"235415324234"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
