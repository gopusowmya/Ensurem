import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-tools',
  templateUrl: './agent-tools.component.html',
  styleUrls: ['./agent-tools.component.scss']
})
export class AgentToolsComponent implements OnInit {

  visible = false;
  show = false;
  screenWidth!: number;
  screenHeight!: number;
  exactWidth!: number;
  exactHeight!: number;
  displayUp = true;
  boxY: any;
  boxX: any;
  isAboveButton: boolean = false;
  items = ['sunfire', 'bdsjf', 'jvhfxjg', 'ghuirie', 'jhgjh', 'hdytdry', 'fjghjghk', 'hdfhfghc']
  listContainerRef: any;


  showPopup() {
    this.visible = !this.visible
  }

  showItems() {
    this.show = !this.show;
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;  //2400 //  2380px
    this.screenHeight = window.innerHeight; //1201 // 1175px 
    console.log(this.screenWidth, this.screenHeight);
    this.exactWidth = this.screenWidth - 40;
    this.exactHeight = this.screenHeight - 40;
    const hexagonToolkit = document.getElementById('hexagon-toolkit');
  }

  onBoxDragged(event: any) {
    debugger
    const boxElement = event.source.element.nativeElement;
    const boxRect = boxElement.getBoundingClientRect();
    this.boxX = boxRect.left;
    this.boxY = boxRect.top;
    this.isAboveButton = boxRect.top < window.innerHeight / 2;
    console.log(`Box position: ${this.boxX}, ${this.boxY}`);
    if (this.boxY > (this.exactHeight / 2)) {
      this.displayUp = true;
    } else {
      this.displayUp = false;
    }
  }
}