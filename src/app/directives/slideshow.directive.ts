import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appSlideshow]'
})
export class SlideshowDirective implements OnInit{

  @Input()
  appSlideshowFrom

  public index = 0;

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) { }


  ngOnInit(){

    this.createSlideShow()

    
  }

  private createSlideShow() {
    this.container.clear();
    this.container.createEmbeddedView(this.template, {$implicit: this.appSlideshowFrom[this.index],
    controller: {
      next: ()=> this.next(),
      prev: ()=> this.prev()
    }
    });

  }

  private next() {

    this.index++;
    this.createSlideShow();

  }
  private prev() {
    this.index--;
    this.createSlideShow();

  }

}
