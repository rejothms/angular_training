import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit {

 @Input()
 appTestFrom;

 @Input()
 appTestIn;
  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef

  ) { }

  ngOnInit() {
    console.log(this.appTestIn);
    for(let item of this.appTestFrom) {
      this.container.createEmbeddedView(this.template, {$implicit: item, index: this.appTestFrom.indexOf(item)});
    }

  }

}
