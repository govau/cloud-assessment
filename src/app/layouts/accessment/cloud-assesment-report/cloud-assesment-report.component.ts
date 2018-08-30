import { Component, OnInit, Input } from '@angular/core';
import { FormDataService } from '../../../services/formData.service';

@Component({
  selector: 'app-cloud-assesment-report',
  templateUrl: './cloud-assesment-report.component.html',
  styleUrls: ['./cloud-assesment-report.component.scss']
})
export class CloudAssesmentReportComponent implements OnInit {
  formData: any;
  CarePlanData: any;

  constructor(
    private formDataService: FormDataService,
  ) { }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    this.CarePlanData = [
      {
        itemNumber: '2715',
        name: 'GP mental health treatment plan',
        startDate: '17 January 2018',
        accessHistories: [
          {
            date: '16 September 2018',
            time: '10:47:20',
            timeZone: 'AEST'
          },
          {
            date: '04 March 2018',
            time: '00:07:34',
            timeZone: 'AEST'
          },
          {
            date: '03 February 2018',
            time: '19:52:09',
            timeZone: 'AEST'
          },
          {
            date: '11 December 2017',
            time: '00:07:34',
            timeZone: 'AEST'
          },
        ]
      },
      {
        itemNumber: '721',
        name: 'Chronic disease management plan',
        startDate: '30 March 2018',
        accessHistories: [
          {
            date: '01 May 2018',
            time: '10:47:20',
            timeZone: 'AEST'
          },
          {
            date: '04 March 2018',
            time: '00:07:34',
            timeZone: 'AEST'
          },
          {
            date: '03 February 2018',
            time: '19:52:09',
            timeZone: 'AEST'
          },
          {
            date: '11 December 2017',
            time: '00:07:34',
            timeZone: 'AEST'
          },
        ]
      }
    ];

  }

  printReport() {
    console.log('print report');
  }


}
