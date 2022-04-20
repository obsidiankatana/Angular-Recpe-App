import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  // create a recipe variable set to the type Recipe Model that you defined. An array of Recipe Models to be exact.
  // Essentially this variable will be and array of multiple Recipe Array objects
  recipes: Recipe[] = [
    // dummy recipe
    new Recipe('A Test Recipe', 'a simple test', 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'),
    new Recipe('A Test Recipe', 'a simple test', 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
