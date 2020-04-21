import { Directive, ElementRef, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective implements OnInit {

  @Input()
  appTheme: string

  constructor(
    private element: ElementRef
  ) { }

  @HostListener('document:click', ['$event.target']) onclick(target) {
    console.log(target);
    let value = this.element.nativeElement.contains(target);

    console.log(value);
  }






  @HostListener('mouseenter') mouseEnter() {
    console.log(this.element.nativeElement)
    this.element.nativeElement.style.color = 'green';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.element.nativeElement.style.color = 'red';
  }

  public mouseEnt(event) {
    console.log(this.element);
  }


  ngOnInit() {

    console.log(this.element);
    this.element.nativeElement.style.color = this.appTheme;
  }


}
