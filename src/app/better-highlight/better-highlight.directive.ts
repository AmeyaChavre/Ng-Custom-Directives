import { Directive, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2) {

  }

  ngOnInit() {

  }

}
