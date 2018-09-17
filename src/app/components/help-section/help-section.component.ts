import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-help-section',
  templateUrl: './help-section.component.html',
  styleUrls: ['./help-section.component.scss']
})
export class HelpSectionComponent implements OnInit {
  @Input() helpText: string;
  @Input() helpTitle = 'Not sure?';

  constructor() { }

  ngOnInit() {
  }

}
