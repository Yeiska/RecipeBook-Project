import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply test', 'https://bmexdi064h-flywheel.netdna-ssl.com/wp-content/uploads/2017/09/Pesto-Pasta-Recipe-foodiecrush.com-002.jpg')
  ];
    
  constructor() { }

  ngOnInit() {
  }

}
