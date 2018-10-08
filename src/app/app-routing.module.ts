import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Config } from './data/Config';
// guards
import { AssessmentGuard } from './guards/assessment.guard';
// pages
import { HomeComponent } from './layouts/home/home.component';
import { AboutComponent } from './layouts/about/about.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { QuestionsComponent } from './layouts/questions/questions.component';
import { ResultComponent } from './layouts/result/result.component';
import { GeneralQuestionComponent } from './layouts/general-question/general-question.component';
import { HowToPrepareComponent } from './layouts/how-to-prepare/how-to-prepare.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: Config.RoutePath.ABOUT, component: AboutComponent },
    { path: Config.RoutePath.CONTACT, component: ContactComponent },
    { path: Config.RoutePath.HOWTOPREPARE, component: HowToPrepareComponent },
    { path: Config.RoutePath.GENERALQUESTION, component: GeneralQuestionComponent, canActivate: [AssessmentGuard] },
    { path: Config.RoutePath.QUESTIONS, component: QuestionsComponent, canActivate: [AssessmentGuard] },
    { path: Config.RoutePath.RESULT, component: ResultComponent, canActivate: [AssessmentGuard] },
    { path: Config.RoutePath.PAGENOTFOUND, component: PageNotFoundComponent },
    {
        path: '**',
        redirectTo: Config.RoutePath.PAGENOTFOUND,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
