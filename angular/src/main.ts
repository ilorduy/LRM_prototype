//import { enableProdMode } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'zone.js/dist/zone';
import 'hammerjs';
//if (environment.production) {
//  enableProdMode();
//}

platformBrowserDynamic().bootstrapModule(AppModule);