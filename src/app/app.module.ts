import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
// service
import { QuestionDataService } from "./services/question-data.service";
// import { RouteDataService } from './services/route-data.service';
import { FormDataService } from './services/formData.service';
import { LocalStorageService } from './services/local-storage.service';
import { WorkFlowService } from './services/work-flow.service';
// components
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { NaviComponent } from './components/navi/navi.component';
import { QuestionDirectionButtonComponent } from './components/question-direction-button/question-direction-button.component';
import { HelpSectionComponent } from './components/help-section/help-section.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { FormRadioQuestionComponent } from './components/form-radio-question/form-radio-question.component';

// pages
import { HomeComponent } from './layouts/home/home.component';
import { AccessmentComponent } from './layouts/accessment/accessment.component';
import { AboutComponent } from './layouts/about/about.component';
import { ContactComponent } from './layouts/contact/contact.component';
// import { QuestionComponent } from './layouts/question/question.component';
import { ResultComponent } from './layouts/result/result.component';
// accessment questions
import { DataSecurityComponent } from './layouts/accessment/data-security/data-security.component';
import { TypeOfCloudServiceComponent } from './layouts/accessment/type-of-cloud-service/type-of-cloud-service.component';
import { AboutTheProductComponent } from './layouts/accessment/about-the-product/about-the-product.component';
import { CloudAssesmentReportComponent } from './layouts/accessment/cloud-assesment-report/cloud-assesment-report.component';
import { QuestionsComponent } from './layouts/questions/questions.component';




@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    NaviComponent,
    QuestionDirectionButtonComponent,
    HelpSectionComponent,
    FormRadioQuestionComponent,
    AccordionComponent,

    HomeComponent,
    AccessmentComponent,
    AboutComponent,
    ContactComponent,
    QuestionsComponent,
    // QuestionComponent,

    DataSecurityComponent,
    TypeOfCloudServiceComponent,
    AboutTheProductComponent,
    CloudAssesmentReportComponent,
    ResultComponent,
    QuestionsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    FormDataService,
    LocalStorageService,
    WorkFlowService,
    QuestionDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
