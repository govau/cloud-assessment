import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// modules
import { AppRoutingModule } from './app-routing.module';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
// service
import { WorkFlowService } from './services/work-flow.service';
import { LocalStorageService } from './services/local-storage.service';
import { SubmitServiceService } from './services/submit-service.service';
// components
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { NaviComponent } from './components/navi/navi.component';
import { QuestionDirectionButtonComponent } from './components/question-direction-button/question-direction-button.component';
import { HelpSectionComponent } from './components/help-section/help-section.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ReportAccordionItemComponent } from './components/report-accordion-item/report-accordion-item.component';
// pages
import { HomeComponent } from './layouts/home/home.component';
import { AboutComponent } from './layouts/about/about.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { QuestionsComponent } from './layouts/questions/questions.component';
import { ResultComponent } from './layouts/result/result.component';
import { GeneralQuestionComponent } from './layouts/general-question/general-question.component';
import { HowToPrepareComponent } from './layouts/how-to-prepare/how-to-prepare.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
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
    ReportAccordionItemComponent,

    HomeComponent,
    AboutComponent,
    ContactComponent,
    QuestionsComponent,
    ResultComponent,
    GeneralQuestionComponent,
    HowToPrepareComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    HttpClientModule
  ],
  providers: [
    AssessmentGuard,
    WorkFlowService,
    LocalStorageService,
    SubmitServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
