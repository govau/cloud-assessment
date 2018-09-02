import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// config
import { CONFIG_DATA } from '../../data/ConfigData';
// service
import { QuestionDataService } from '../../services/question-data.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
    selector: 'app-accessment',
    templateUrl: './accessment.component.html',
    styleUrls: ['./accessment.component.scss']
})
export class AccessmentComponent implements OnInit {
    showModal: boolean;

    constructor(
        private router: Router,
        private questionDataService: QuestionDataService,
        private localStorageService: LocalStorageService,
    ) { }

    ngOnInit() {
    }

    startAccessment() {
        if (this.localStorageService.exist()) {
            this.showModal = true;
        } else {
            this.questionDataService.reset();
            this.router.navigateByUrl(CONFIG_DATA.ROUTE_PATH.QUESTIONS);
        }
    }

    yes() {
        this.questionDataService.reset();
        this.questionDataService.restore(this.localStorageService.get());
        this.router.navigateByUrl(CONFIG_DATA.ROUTE_PATH.QUESTIONS);
    }

    no() {
        this.questionDataService.reset();
        this.localStorageService.clear();
        this.router.navigateByUrl(CONFIG_DATA.ROUTE_PATH.QUESTIONS);
    }
}
