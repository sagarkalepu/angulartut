import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe-model"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
						new Recipe("A Test Recipe", "This is simply a test", "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjGh4-tqP7fAhXEZSsKHQe6ARsQjRx6BAgBEAU&url=https%3A%2F%2Ffoodrevolution.org%2Fblog%2Fhow-to-eat-to-prevent-diabetes%2F&psig=AOvVaw0lA07xJqvZTO-QXP556zEH&ust=1548140882742604")
		]
  constructor() { }

  ngOnInit() {
  }

}
