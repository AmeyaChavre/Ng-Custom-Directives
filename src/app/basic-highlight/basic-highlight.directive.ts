import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit{
	constructor(private elementRef: ElementRef) {

	}

	ngOnInit(){
		this.elementRef.nativeElement.style.backgroundColor = 'green';
     	this.elementRef.nativeElement.style.color = 'yellow';
	}
     // Imparts green color to 
	 // background whenever custom directive selector is attached to a html tag
}