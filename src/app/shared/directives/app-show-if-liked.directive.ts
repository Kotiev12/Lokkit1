import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[appShowIfLiked]'
})
export class ShowIfLikedDirective {
  private templateRef = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef); 

  @Input() set appShowIfLiked(likes: number) {
    this.viewContainer.clear();
    if (likes > 0) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}