import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Config } from './data/Config';
// guards
import { AssessmentGuard } from './guards/assessment.guard';
// pages
import { HomeComponent } from './layouts/home/home.component';
import { AssessmentComponent } from './layouts/assessment/assessment.component';
import { AboutComponent } from './layouts/about/about.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { QuestionsComponent } from './layouts/questions/questions.component';
import { ResultComponent } from './layouts/result/result.component';
import { GeneralQuestionComponent } from "./layouts/general-question/general-question.component";
import { HowToPrepareComponent } from "./layouts/how-to-prepare/how-to-prepare.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: Config.RoutePath.ABOUT, component: AboutComponent },
    { path: Config.RoutePath.CONTACT, component: ContactComponent },
    { path: Config.RoutePath.ASSESSMENT, component: AssessmentComponent },
    { path: Config.RoutePath.GENERALQUESTION, component: GeneralQuestionComponent },
    // { path: Config.RoutePath.QUESTIONS, component: QuestionsComponent },
    { path: Config.RoutePath.QUESTIONS, component: QuestionsComponent, canActivate: [AssessmentGuard] },
    { path: Config.RoutePath.RESULT, component: ResultComponent, canActivate: [AssessmentGuard] },
    // { path: Config.RoutePath.RESULT, component: ResultComponent },
    { path: Config.RoutePath.HOWTOPREPARE, component: HowToPrepareComponent },
    // todo unique url per question
    // {
    //     path: Config.RoutePath.QUESTIONS,
    //     canActivate: [AssessmentGuard],
    //     children: [
    //         // { path: '1', component: QuestionsComponent },
    //         // { path: '2', component: QuestionsComponent },
    //         // { path: '3', component: QuestionsComponent },
    //         // { path: '4', component: QuestionsComponent },
    //         // { path: '5', component: QuestionsComponent },
    //         // { path: '6', component: QuestionsComponent },
    //         // { path: '7', component: QuestionsComponent },
    //         // { path: '8', component: QuestionsComponent },
    //         // { path: '9', component: QuestionsComponent },
    //         // { path: '10', component: QuestionsComponent },
    //         // { path: '11', component: QuestionsComponent },
    //         // { path: '12', component: QuestionsComponent },
    //         // { path: '13', component: QuestionsComponent },
    //         // { path: '14', component: QuestionsComponent },
    //         // { path: '15', component: QuestionsComponent },
    //         // { path: '16', component: QuestionsComponent },
    //         // { path: '17', component: QuestionsComponent },
    //     ]
    // },
    {
        path: '**',
        redirectTo: Config.RoutePath.HOME,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule {
    // todo unique url per question
    // constructor(router: Router) {
    //     const config = router.config;
    //     const questions_route = config.find(x => x.path === Config.RoutePath.QUESTIONS);

    //     Config.QuestionData.forEach(q =>
    //         questions_route.children.push({ path: q.id.toString(), component: QuestionsComponent })
    //     );

    //     router.resetConfig(config);
    // }
}
