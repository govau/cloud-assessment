import { Injectable } from '@angular/core';
import { Config } from '../data/Config';
import { HttpClient } from '@angular/common/http';
import { WorkFlowService } from './work-flow.service';

@Injectable()
export class SubmitServiceService {
  private baseUrl = Config.ApiUrl;

  constructor(
    private http: HttpClient,
    private workFlowService: WorkFlowService
  ) { }

  submitReport() {
    const url = `${this.baseUrl}/submit?data=${this.workFlowService.captchaResponse}`;
    return this.http.post(url, this.workFlowService.appData);
  }
}
