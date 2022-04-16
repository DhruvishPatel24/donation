import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './faqs/navbar/navbar.component';
import { Home1Component } from './howitworks/home1/home1.component';
import { TestimonialComponent } from './testimonial/testimonial/testimonial.component';
import { CarouselComponent } from './carousel/carousel/carousel.component';


const routes: Routes = [
  {path:'navbar',component:NavbarComponent},
  {path:'testimonial',component:TestimonialComponent},
  {path: 'home1',component:Home1Component},
  {path:'carousel',component:CarouselComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
