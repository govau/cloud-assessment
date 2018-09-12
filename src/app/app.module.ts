import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// modules
import { AppRoutingModule } from './app-routing.module';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
// service
import { WorkFlowService } from './services/work-flow.service';
import { LocalStorageService } from './services/local-storage.service';
import { ReportService } from "./services/report.service";
// components
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { NaviComponent } from './components/navi/navi.component';
import { QuestionDirectionButtonComponent } from './components/question-direction-button/question-direction-button.component';
import { HelpSectionComponent } from './components/help-section/help-section.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
// pages
import { HomeComponent } from './layouts/home/home.component';
import { AssessmentComponent } from './layouts/assessment/assessment.component';
import { AboutComponent } from './layouts/about/about.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { QuestionsComponent } from './layouts/questions/questions.component';
import { ResultComponent } from './layouts/result/result.component';
import { GeneralQuestionComponent } from './layouts/general-question/general-question.component';
import { HowToPrepareComponent } from './layouts/how-to-prepare/how-to-prepare.component';
// guards
import { AssessmentGuard } from './guards/assessment.guard';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    NaviComponent,
    QuestionDirectionButtonComponent,
    HelpSectionComponent,
    ModalComponent,
    ProgressBarComponent,

    HomeComponent,
    AssessmentComponent,
    AboutComponent,
    ContactComponent,
    QuestionsComponent,
    ResultComponent,
    GeneralQuestionComponent,
    HowToPrepareComponent,
  ],
  // todo dynamic route
  entryComponents: [
    AssessmentComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
  ],
  providers: [
    AssessmentGuard,
    WorkFlowService,
    LocalStorageService,
    ReportService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
