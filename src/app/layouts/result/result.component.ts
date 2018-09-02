import { Component, OnInit } from '@angular/core';
import QuestionItem from '../../classes/QuestionItem';
import { QuestionDataService } from '../../services/question-data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  result: QuestionItem[];

  constructor(
    private questionDataService: QuestionDataService,
  ) { }

  ngOnInit() {
    this.result = this.questionDataService.all;
  }

}
