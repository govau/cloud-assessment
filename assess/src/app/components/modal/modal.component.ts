import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit {
  @Input() show: boolean;
  @Input() title: string;
  @Input() primaryButtonText: string;
  @Input() secondaryButtonText: string;
  @Input() largeSize: boolean;
  @Output() close = new EventEmitter();
  @Output() primaryButtonClick = new EventEmitter();
  @Output() secondaryButtonClick = new EventEmitter();

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    const modal = <HTMLElement>document.querySelector('.modal');
    modal.addEventListener('keydown', function (e) {
      if (e.keyCode === 9) {
        // Shift Tab
        if (e.shiftKey) {
          if (document.activeElement === firstItem) {
            e.preventDefault();
            lastItem.focus();
          }
          // Tab
        } else {
          if (document.activeElement === lastItem) {
            e.preventDefault();
            firstItem.focus();
          }
        }
      }
    });
    let focusableElements = modal.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]');

    focusableElements = Array.prototype.slice.call(focusableElements);

    const firstItem = <HTMLElement>focusableElements[0];
    const lastItem = <HTMLElement>focusableElements[focusableElements.length - 1];

    firstItem.focus();
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
