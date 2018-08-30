// import { Injectable } from '@angular/core';
// import { Router, UrlSegment, UrlTree, UrlSegmentGroup, PRIMARY_OUTLET } from '@angular/router';
// import { ROUTE_PATH } from '../Routes';

// import { LocalStorageService } from './local-storage.service';
// import { FormDataService } from './formData.service';

// @Injectable()
// export class WorkFlowService {
//     private questions: string[];
//     private startPath: string;
//     private finishePath: string;

//     constructor(
//         private router: Router,
//         private formDataService: FormDataService,
//         private localStorageService: LocalStorageService,
//     ) {
//         // todo move into config file
//         this.questions = [
//             ROUTE_PATH.DATA_SECURITY,
//             ROUTE_PATH.TYPE_OF_CLOUD_SERVICE,
//             ROUTE_PATH.ABOUT_THE_PRODUCT,
//         ];
//         this.startPath = ROUTE_PATH.ACCESSMENT;
//         this.finishePath = ROUTE_PATH.CLOUD_ASSESMENT_REPORT;
//     }

//     goPrevious(): void {
//         const lastSegment = this.getLastSegmentOfURL();
//         if (lastSegment === this.questions[0]) {
//             this.router.navigate([this.startPath]);
//         } else {
//             const index = this.questions.findIndex(path => path === lastSegment);
//             this.router.navigate([this.startPath, this.questions[index - 1]]);
//         }
//     }

//     goNext(): void {
//         // todo maybe refactor-> create this.localStorageService.save()
//         // call this.localStorageService.save() in each component before function goNext();
//         const lastSegment = this.getLastSegmentOfURL();
//         if (lastSegment === this.startPath) {
//             this.localStorageService.clear();
//             this.router.navigate([this.startPath, this.questions[0]]);
//         } else {
//             const index = this.questions.findIndex(path => path === lastSegment);
//             if (index === this.questions.length - 1) {
//                 this.localStorageService.clear();
//                 this.router.navigate([this.startPath, this.finishePath]);
//             } else {
//                 this.localStorageService.set(this.formDataService.getFormData());
//                 this.router.navigate([this.startPath, this.questions[index + 1]]);
//             }
//         }
//     }

//     private getLastSegmentOfURL(): string {
//         const tree: UrlTree = this.router.parseUrl(this.router.url);
//         const group: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
//         const segments: UrlSegment[] = group.segments;
//         const lastSegment = segments.pop().path;
//         return lastSegment;
//     }

// }


import { Injectable } from '@angular/core';

import QuestionItem from '../classes/QuestionItem';
import { QuestionData } from '../data/QuestionData';

// import { LocalStorageService } from './local-storage.service';
// import { FormDataService } from './formData.service';

@Injectable()
export class WorkFlowService {
    private questions: QuestionItem[];
    private currentIndex: number;

    constructor(
        // private formDataService: FormDataService,
        // private localStorageService: LocalStorageService,
    ) {
        // todo move into config file
        this.questions = QuestionData;
        this.currentIndex = 0;
    }

    goPrevious(): QuestionItem {
        this.currentIndex = this.currentIndex - 1;
        return this.questions[this.currentIndex];
    }

    goNext(): QuestionItem {
        if (this.currentIndex === 0) {
            this.currentIndex = 1;
            return this.questions[0];
        } else {
            this.currentIndex += 1;
            return this.questions[this.currentIndex];
        }
    }
}
