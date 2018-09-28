import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input() progress: string;
  @Input() progressText: string;
  @Input() color: string;

  constructor() {
    // Default color
    this.color = '#488aff';
  }

  whichProgress(progress: string) {
    try {
      return Math.round(+progress * 100) / 100;
    } catch {
      return progress;
    }
  }
}
