import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  @Input() value: boolean = true;

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
      if(this.value) {
        this.viewContainerRef.createEmbeddedView(templateRef);
      } else {
        this.viewContainerRef.clear();
      }

   }

}