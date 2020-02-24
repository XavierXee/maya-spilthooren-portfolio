import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavComponent } from './components/nav/nav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { OverviewComponent } from './components/overview/overview.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {AppInitializerService} from './app-initializer.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    NavComponent,
    SidebarComponent,
    CarouselComponent,
    OverviewComponent,
    HomeComponent,
    ProjectComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      anchorScrolling: 'disabled'
    }),
    FormsModule
  ],
  providers: [
    AppInitializerService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      multi: true,
      deps: [AppInitializerService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function appInitializerFactory(appInitializer: AppInitializerService): () => Promise<any> {
  return (): Promise<any> => appInitializer.initApplication().catch((err: any) => { alert(err); });
}
