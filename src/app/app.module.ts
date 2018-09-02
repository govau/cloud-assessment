import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
// service
import { QuestionDataService } from './services/question-data.service';
// import { RouteDataService } from './services/route-data.service';
import { LocalStorageService } from './services/local-storage.service';
import { WorkFlowService } from './services/work-flow.service';
// components
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { NaviComponent } from './components/navi/navi.component';
import { QuestionDirectionButtonComponent } from './components/question-direction-button/question-direction-button.component';
import { HelpSectionComponent } from './components/help-section/help-section.component';
import { ModalComponent } from './components/modal/modal.component';
// todo remove
import { AccordionComponent } from './components/accordion/accordion.component';
import { FormRadioQuestionComponent } from './components/form-radio-question/form-radio-question.component';

// pages
import { HomeComponent } from './layouts/home/home.component';
import { AccessmentComponent } from './layouts/accessment/accessment.component';
import { AboutComponent } from './layouts/about/about.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { QuestionsComponent } from './layouts/questions/questions.component';
import { ResultComponent } from './layouts/result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    NaviComponent,
    QuestionDirectionButtonComponent,
    HelpSectionComponent,
    ModalComponent,
    AccordionComponent,
    FormRadioQuestionComponent,

    HomeComponent,
    AccessmentComponent,
    AboutComponent,
    ContactComponent,
    QuestionsComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    LocalStorageService,
    WorkFlowService,
    QuestionDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
