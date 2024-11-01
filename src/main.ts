import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';

bootstrapApplication(AppComponent, {
  providers: [provideAnimations(), NG_EVENT_PLUGINS, NG_EVENT_PLUGINS],
}).catch((err) => console.error(err));
