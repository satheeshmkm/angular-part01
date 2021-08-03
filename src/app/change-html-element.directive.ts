import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeHtmlElement]'
})
export class ChangeHtmlElementDirective {

  private element:ElementRef;
  constructor(private elem:ElementRef) { 
    console.log(elem);
    elem.nativeElement.style.color="white";
    elem.nativeElement.style.backgroundColor="orange";
    elem.nativeElement.innerHTML="I am from Mukkam"; // Constructor will be called before loading content of component
    this.element=elem;
  }

  ngOnInit(){
    this.element.nativeElement.innerHTML+=" , I am from Kerala";
  }

}
