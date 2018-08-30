import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_PATH } from '../../Routes';
// import { LocalStorageService } from '../../services/local-storage.service';
// import { FormDataService } from '../../services/formData.service';
// import { WorkFlowService } from '../../services/work-flow.service';

@Component({
    selector: 'app-accessment',
    templateUrl: './accessment.component.html',
    styleUrls: ['./accessment.component.scss']
})
export class AccessmentComponent implements OnInit {

    constructor(
        private router: Router,
        // private localStorageService: LocalStorageService,
        // private formDataService: FormDataService,
        // private workFlowService: WorkFlowService,
    ) { }

    ngOnInit() {
        // this.currentQuestion = {
        //     category: 'Vendor',
        //     subCategory: '',
        //     quality: 'Business & financial health',
        //     description: 'Degree to which the vendor is deemed to be in a healthy business and financial situation',
        //     reference: `Example: Does the vendor have a track record of stability and is in a
        //     healthy financial position with sufficient capital to operate successfully over the long term?`,
        //     condition: '',
        //     relationship: '',
        //     valueType: 'Integer',
        //     defaultValue: '4/5',
        //     requiredValueRationale: '',
        //     assessmentValue: '',
        //     assessmentValueRationale: '',
        // };
    }

    startAccessment() {
        this.router.navigateByUrl(ROUTE_PATH.QUESTIONS);
    }

    // startAccessment() {
    //     this.formDataService.clearFormData();
    //     if (this.localStorageService.exist()) {
    //         // todo modal
    //         if (confirm('Do you want to load data?')) {
    //             this.formDataService.setFormData(this.localStorageService.get());
    //         } else {
    //             // this.localStorageService.clear();
    //         }
    //     }
    //     this.workFlowService.goNext();
    // }

    // startAccessment() {
    //     console.log('startAccessment');
    //     this.action = 'question';
    // }

    // submitAccessment() {
    //     console.log('submitAccessment');
    //     this.action = 'report';
    // }

    // restartAccessment() {
    //     console.log('restartAccessment');
    //     this.action = 'landing';
    // }
}
