import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  @Input() appIf: boolean = true;

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
      if(this.appIf) {
        this.viewContainerRef.createEmbeddedView(templateRef);
      } else {
        this.viewContainerRef.clear();
      }

   }

}