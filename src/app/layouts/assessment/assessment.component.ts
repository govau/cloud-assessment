import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// config
import { Config } from '../../data/Config';
// service
import { WorkFlowService } from '../../services/work-flow.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
    selector: 'app-assessment',
    templateUrl: './assessment.component.html',
    styleUrls: ['./assessment.component.scss'],
})
export class AssessmentComponent implements OnInit {
    showModal: boolean;
    declarativeFormCaptchaValue: string;
    reCAPTCHAConfig: any;
    public routePath = Config.RoutePath;

    constructor(
        private router: Router,
        private workFlowService: WorkFlowService,
        private localStorageService: LocalStorageService,
    ) { }

    ngOnInit() {
        this.showModal = false;
        this.reCAPTCHAConfig = Config.reCAPTCHA;
    }

    startAssessment() {
        this.showModal = true;
        console.log(this.showModal);
        if (this.localStorageService.exist()) {
            this.showModal = true;
        } else {
            this.workFlowService.reset();
            this.router.navigateByUrl(Config.RoutePath.GENERALQUESTION);
            //this.router.navigateByUrl(Config.RoutePath.QUESTIONS);
            // todo unique url per question
            // this.router.navigateByUrl(Config.RoutePath.QUESTIONS + '/1');
        }
    }

    yes() {
        this.showModal = false;
        this.workFlowService.reset();
        this.workFlowService.restore(this.localStorageService.get());
        this.router.navigateByUrl(Config.RoutePath.GENERALQUESTION);

        // todo Go to last open question when local storage is loaded

        // todo unique url per question
        // this.router.navigateByUrl(Config.RoutePath.QUESTIONS + '/1');
    }

    no() {
        this.showModal = false;
        this.workFlowService.reset();
        this.localStorageService.clear();
        this.router.navigateByUrl(Config.RoutePath.GENERALQUESTION);

        // todo unique url per question
        // this.router.navigateByUrl(Config.RoutePath.QUESTIONS + '/1');
    }
}
