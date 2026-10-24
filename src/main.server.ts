import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/components/_root/app.component';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(App, config, context);

export default bootstrap;
