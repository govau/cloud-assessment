import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {

  /** Inputs **/
  // {{whichProgress(progress)}}%
  @Input() progress: string;
  @Input() progressText: string;
  @Input() color: string;
  @Input() degraded: any;

  constructor() {
    // Default color
    this.color = '#488aff';
  }

  /**
   * Returns a color for a certain percent
   * @param percent The current progress
   */
  whichColor(percent: string) {
    // Get all entries index as an array
    let k: Array<any> = Object.keys(this.degraded);
    // Convert string to number
    k.forEach((e, i) => k[i] = +e);
    // Sort them by value
    k = k.sort((a, b) => a - b);
    // Percent as number
    const p = +percent;
    // Set last by default as the first occurrence
    let last = k[0];
    // Foreach keys
    for (const val of k) {
      // if current val is < than percent
      if (val < p) {
        last = val;
      } else if (val >= p - 1) {
        return this.degraded[last];
      }
    }
    // if its the last one return the last
    return this.degraded[last];
  }

  whichProgress(progress: string) {
    try {
      return Math.round(+progress * 100) / 100;
    } catch {
      return progress;
    }
  }

}
