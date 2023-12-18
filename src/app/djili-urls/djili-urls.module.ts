import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DjiliURLSModule { 
  public static SPRING_BASE_URL = "http://localhost:8082/djili/"

  public static USER_CONTROLLER = "users/"
  public static PRODUCTS_CONTROLLER = "products/"
  public static PAYMENT_CONTROLLER = "payment/"

  public static SIGNUP_URL = DjiliURLSModule.SPRING_BASE_URL+DjiliURLSModule.USER_CONTROLLER+"signup"
  public static LOGIN_URL = DjiliURLSModule.SPRING_BASE_URL+DjiliURLSModule.USER_CONTROLLER+"login"
  
  public static ADD_PRODUCTS = DjiliURLSModule.SPRING_BASE_URL+DjiliURLSModule.PRODUCTS_CONTROLLER+"add"
  public static GET_ALL_PRODUCTS_URL = DjiliURLSModule.SPRING_BASE_URL+DjiliURLSModule.PRODUCTS_CONTROLLER+"list"
  public static GET_PRODUCTS_BY_USER_ID = DjiliURLSModule.SPRING_BASE_URL+DjiliURLSModule.PRODUCTS_CONTROLLER+"user"

  public static GET_USER_BY_EMAIL = DjiliURLSModule.SPRING_BASE_URL+DjiliURLSModule.USER_CONTROLLER+"user"
  public static GET_USER_ID_BY_EMAIL = DjiliURLSModule.SPRING_BASE_URL+DjiliURLSModule.USER_CONTROLLER+"userID"

  public static UPDATE_CAR_PART = DjiliURLSModule.SPRING_BASE_URL + DjiliURLSModule.PRODUCTS_CONTROLLER+"updatepart"

  public static PAYMENT = DjiliURLSModule.SPRING_BASE_URL+ DjiliURLSModule.PAYMENT_CONTROLLER+"validate"


  

}
