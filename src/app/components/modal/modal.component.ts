import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() show: boolean;
  @Input() title: string;
  @Input() primaryButtonText: string;
  @Input() secondaryButtonText: string;
  @Input() largeSize: boolean;
  @Output() close = new EventEmitter();
  @Output() primaryButtonClick = new EventEmitter();
  @Output() secondaryButtonClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public closeModal() {
    this.show = false;
    this.close.emit();
  }

  public primaryClicked() {
    this.primaryButtonClick.emit();
    this.closeModal();
  }

  public secondaryClicked() {
    this.secondaryButtonClick.emit();
    this.closeModal();
  }

}
