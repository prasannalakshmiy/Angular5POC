import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

recipes:Recipe[]=[
  new Recipe('pasta','boil the pasta','https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/e98af2ff-e29c-4d92-915d-711412b470c3.jpg._CB528289739__SL300__.jpg'), new Recipe('hard-boiled-eggs','boil the eggs in a vessel','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadj3oGoREEHdV2UKKUgsIkYZSkgPtWs9MjlsIPAsMXAnzDztI3g')];

  constructor() { }

  ngOnInit() {
  }

}
