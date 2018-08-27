import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloud-assesment-report',
  templateUrl: './cloud-assesment-report.component.html',
  styleUrls: ['./cloud-assesment-report.component.scss']
})
export class CloudAssesmentReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  printReport() {
    console.log('print report');
  }
}
