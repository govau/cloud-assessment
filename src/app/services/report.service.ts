import { Injectable, OnInit } from '@angular/core';
// model
import IQuestionItem from '../classes/IQuestionItem';
// service
// import { WorkFlowService } from "./work-flow.service";
import { ResultData } from "../data/result-data";

// {
//   "Category": "",
//     "Children": [
//       {

//       }
//     ]
// }

@Injectable()
export class ReportService {
  private _data: IQuestionItem[];

  constructor(
  ) {
    this._data = ResultData;
  }


  get Categories(): string[] {
    const categories = [];
    this._data.forEach(x => {
      if (categories.indexOf(x.Category) === -1 && x.Category != 'General' && x.Category.trim() != '') {
        categories.push(x.Category);
      }
    });
    return categories;
  }

  CountRedByCategory(name: string): number {
    return 3;
  }

  CountOrangeByCategory(name: string): number {
    return 2;
  }

  CountGreenByCategory(name: string): number {
    return 1;
  }

}
