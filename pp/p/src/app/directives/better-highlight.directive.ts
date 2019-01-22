import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding , Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding("style.backgroundColor") backgroundColor : string = "transparent";
	@Input() defaultColor: string = "yellow";
	@Input() highlightColor: string = "red";
	
	constructor( private eleRef: ElementRef, private renderer: Renderer2 ) {} 

	ngOnInit() {
		//this.renderer.setStyle(this.eleRef.nativeElement, "background-color", "yellow");
	}

	@HostListener("mouseenter")
	mouseover(eventData: Event){
		//this.renderer.setStyle(this.eleRef.nativeElement, "background-color", "blue");
		this.backgroundColor = "red";
	}
	@HostListener("mouseleave")
	mouseleave(eventData: Event) {
		//this.renderer.setStyle(this.eleRef.nativeElement, "background-color", "yellow");
		this.backgroundColor = "yellow";
	}
}
