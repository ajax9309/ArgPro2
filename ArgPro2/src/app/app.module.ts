import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoappComponent } from './components/logoapp/logoapp.component';
import { SocialComponent } from './components/social/social.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducComponent } from './components/educ/educ.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoappComponent,
    SocialComponent,
    BannerComponent,
    AboutComponent,
    SkillsComponent,
    EducComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
