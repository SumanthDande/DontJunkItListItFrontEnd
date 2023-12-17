import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ViewProductsComponent } from './Components/view-products/view-products.component';
import { CartComponent } from './Components/cart/cart.component';
import { ImageComponent } from './image/image.component';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { AddProductsComponent } from './Components/add-products/add-products.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductResolver } from './product-resolver.service';
import { FaqComponent } from './Components/faq/faq.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { UserEditComponent } from './Components/user-edit/user-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'viewproducts', component: ViewProductsComponent },
  { path: 'cart', component: CartComponent },
  {path: 'addproducts', component: AddProductsComponent},

  //for testing image uplod and display 
  {path: 'upload', component: ImageComponent} ,//testing image upload
  {path: 'viewImages', component: ImageDisplayComponent},

  { path: 'product-details/:id', component: ProductDetailsComponent, resolve:{product: ProductResolver} },
  {path: 'faq', component: FaqComponent},
  {path: 'contactus', component: ContactUsComponent},

  { path: 'users/:email/edit', component: UserEditComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
