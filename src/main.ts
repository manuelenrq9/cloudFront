import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MyComponent } from './app/my-component/my-component.component';
import { BackgroundComponent } from './app/background/background.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(MyComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(BackgroundComponent, appConfig)
  .catch((err) => console.error(err));
