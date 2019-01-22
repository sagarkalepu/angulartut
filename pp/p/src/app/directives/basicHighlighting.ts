import {Directive, ElementRef, OnInit} from "@angular/core"

@Directive({
	selector: "[basicHighlight]"
})
export class BasicHighlighting implements OnInit{
	
	constructor(private element : ElementRef) {
		
	}
	
	ngOnInit() {
		this.element.nativeElement.style.backgroundColor = "green";
	}
}