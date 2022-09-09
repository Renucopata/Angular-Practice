import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appColorChanger]'
})
export class ColorChangerDirective {

  @Input() color: string = 'yellow'
  @Output() outputTest = new EventEmitter<any>(null);


  @HostListener('click') onClick() { //window: click listen the click on any part pf the page
    this.element.nativeElement.style.background = this.color
  }
  @HostListener('mouseenter') onMouseenter() { 
    this.setBackground('red');
    this.outputTest.emit('Message emmited')
  }

  @HostListener('mouseleave') onMouseleave() {
    this.setBackground('gray');
  }

  constructor(private element: ElementRef) {
      this.element.nativeElement.style.background = this.color;
      this.element.nativeElement.style.border = "5px solid black";
   }

   public setBackground(color: string) {
      this.element.nativeElement.style.background = color;
   }



}