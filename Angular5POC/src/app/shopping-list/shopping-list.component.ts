import { Component, OnInit } from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients :Ingredient[]= [new Ingredient('pasta',1),new Ingredient('eggs',6) ];
  constructor() { }

  ngOnInit() {
  }

}
