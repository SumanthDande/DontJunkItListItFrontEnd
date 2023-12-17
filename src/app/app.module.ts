import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';



import { LoginComponent } from './Components/login/login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ViewProductsComponent } from './Components/view-products/view-products.component';
import { CartComponent } from './Components/cart/cart.component';
import { ImageComponent } from './image/image.component';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { AddProductsComponent } from './Components/add-products/add-products.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FaqComponent } from './Components/faq/faq.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { UserEditComponent } from './Components/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ViewProductsComponent,
    CartComponent,
    ImageComponent,
    ImageDisplayComponent,
    AddProductsComponent,
    ProductDetailsComponent,
    NavBarComponent,
    FaqComponent,
    ContactUsComponent,
    UserEditComponent  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required for toastr
    ToastrModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
