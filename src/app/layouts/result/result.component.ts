import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// model
import IQuestionItem from '../../classes/IQuestionItem';
// service
import { WorkFlowService } from '../../services/work-flow.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  result: IQuestionItem[];
  downloadJsonHref: any;

  constructor(
    private workFlowService: WorkFlowService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.result = this.workFlowService.result;
    this.generateDownloadJsonUri();
  }

  generateDownloadJsonUri() {
    const theJSON = JSON.stringify(this.result);
    const uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
    this.downloadJsonHref = uri;
  }

  backToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
