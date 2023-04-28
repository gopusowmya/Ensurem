import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appMouseScrollEvent]'
})
export class MouseScrollEventDirective {
  @Output() mouseScrolled = new EventEmitter()
  constructor() {


  }

  @HostListener('wheel', ['$event'])

  public mouseScrollEventHandler(ev: any) {
    if (ev['wheelDeltaY'] > 0) {
      console.log('scrolling up');
      this.mouseScrolled.emit("up")
    }
    else {
      console.log('scroll down')
      this.mouseScrolled.emit("down")

    }
  }

}
