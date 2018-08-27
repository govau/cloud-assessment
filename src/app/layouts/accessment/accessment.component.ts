import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_PATH } from '../../Routes';

@Component({
    selector: 'app-accessment',
    templateUrl: './accessment.component.html',
    styleUrls: ['./accessment.component.scss']
})
export class AccessmentComponent implements OnInit {
    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    startAccessment() {
        // todo check local storage, if (exist) { show modal if(yes){ load } else{ delete }} } 
        this.router.navigate([ROUTE_PATH.ACCESSMENT, ROUTE_PATH.DATA_SECURITY]);
    }
}
