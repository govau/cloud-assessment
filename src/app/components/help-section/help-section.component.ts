import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-help-section',
  templateUrl: './help-section.component.html'
})
export class HelpSectionComponent implements OnInit {
  @Input() helpText: string;
  @Input() helpTitle = 'Not sure?';

  constructor() { }

  ngOnInit() {
  }

}
