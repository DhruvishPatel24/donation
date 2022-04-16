import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './faqs/navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel/carousel.component';
import { TestimonialComponent } from './testimonial/testimonial/testimonial.component';
import { Home1Component } from './howitworks/home1/home1.component';
import { AboutusComponent } from './aboutus/aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    TestimonialComponent,
    AboutusComponent,
    Home1Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
