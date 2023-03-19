import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CloudCanvasComponent } from './landing/cloud-canvas/cloud-canvas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreComponent } from './core/core.component';
import { CoreModule } from './core/core.module';

const routes:Routes=[
  {path:'home', component:LandingComponent},
  {path:'core',component:CoreComponent},

  {path:'**', redirectTo:'home'}
]

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    CloudCanvasComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
