import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes():Dish[]{
    return DISHES;

  }
  getDish(id:string):Dish{
    
    return DISHES.filter((dish)=>id===dish.id)[0];
  }
  getFeaturedDish():Dish{
    return DISHES.filter((dish)=>dish.featured)[0];
  }
}
