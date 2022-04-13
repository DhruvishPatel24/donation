import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './faqs/navbar/navbar.component';
import { HomeComponent } from './faqs/home/home/home.component';
import { CarouselComponent } from './carousel/carousel/carousel.component';
import { TestimonialComponent } from './testimonial/testimonial/testimonial.component';
import { WorksComponent } from './howitworks/works/works.component';
import { Home1Component } from './howitworks/home1/home1.component';
import { Works1Component } from './howitworks/works1/works1/works1.component';
import { AboutusComponent } from './aboutus/aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarouselComponent,
    TestimonialComponent,
    WorksComponent,
    Home1Component,
    Works1Component,
    AboutusComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
