import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	a = [1, 2, 3, 4, 5, 6];
	onlyOdd = [1, 3, 5];
	onlyEven = [2, 4, 6];
	show :string = "odd"
	
	
	
 	tgle(event) {
		this.show = (this.show == "odd") ? "even" : "odd"
	}
	
	
}
