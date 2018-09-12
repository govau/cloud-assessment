import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { WorkFlowService } from '../services/work-flow.service';
import { Config } from '../data/Config';

@Injectable()
export class AssessmentGuard implements CanActivate {

  constructor(
    private workFlowService: WorkFlowService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      if (!this.workFlowService.status) {
        this.router.navigate([Config.RoutePath.HOME]);
        resolve(false);
      } else {
        resolve(true);
      }
    });
  }
}
