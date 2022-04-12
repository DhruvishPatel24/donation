import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './faqs/home/home/home.component';
import { NavbarComponent } from './faqs/navbar/navbar.component';
import { NgoComponent } from './faqs/ngo/ngo.component';
import { Home1Component } from './howitworks/home1/home1.component';
import { WorksComponent } from './howitworks/works/works.component';
import { Works1Component } from './howitworks/works1/works1/works1.component';
import { TestimonialComponent } from './testimonial/testimonial/testimonial.component';
import { DonorComponent } from './faqs/donor/donor.component';
import { CarouselComponent } from './carousel/carousel/carousel.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'donor',component:DonorComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'ngo',component:NgoComponent},
  {path:'testimonial',component:TestimonialComponent},
  {path: 'home1',component:Home1Component},
  {path:'works',component:WorksComponent},
  {path:'works1',component:Works1Component},
  {path:'carousel',component:CarouselComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
