import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface AccordionToggleData {
  index: number;
  open: boolean;
}

export default interface StackedHeader {
  top: string;
  bottom: string;
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  static IDcounter: number;
  @Input() header?: string;
  @Input() stackedHeader?: StackedHeader;
  @Input() hasResponsiveHeader?: boolean;
  @Input() open: boolean;
  @Input() index: number;

  @Output() toggle = new EventEmitter<AccordionToggleData>();

  constructor() {
    AccordionComponent.IDcounter = 0;
  }

  ngOnInit() {
    this.index = AccordionComponent.IDcounter;
    AccordionComponent.IDcounter++;
  }

  toggleAccordion = () => {
    this.open = !this.open;
    this.toggle.emit({
      index: this.index,
      open: this.open
    });
  }
}
