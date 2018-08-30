import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTE_PATH } from './Routes';
// pages
import { HomeComponent } from './layouts/home/home.component';
import { AccessmentComponent } from './layouts/accessment/accessment.component';
import { AboutComponent } from './layouts/about/about.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { QuestionsComponent } from './layouts/questions/questions.component';
import { ResultComponent } from './layouts/result/result.component';
// accessment question
import { CloudAssesmentReportComponent } from './layouts/accessment/cloud-assesment-report/cloud-assesment-report.component';
import { DataSecurityComponent } from './layouts/accessment/data-security/data-security.component';
import { TypeOfCloudServiceComponent } from './layouts/accessment/type-of-cloud-service/type-of-cloud-service.component';
import { AboutTheProductComponent } from './layouts/accessment/about-the-product/about-the-product.component';

const routes: Routes = [
    { path: ROUTE_PATH.HOME, component: HomeComponent },
    { path: ROUTE_PATH.ABOUT, component: AboutComponent },
    { path: ROUTE_PATH.CONTACT, component: ContactComponent },
    { path: ROUTE_PATH.ACCESSMENT, component: AccessmentComponent },
    { path: ROUTE_PATH.QUESTIONS, component: QuestionsComponent },
    { path: ROUTE_PATH.RESULT, component: ResultComponent },
    // {
    //     path: ROUTE_PATH.ACCESSMENT,
    //     children: [
    //         { path: '', component: AccessmentComponent },
    //         { path: ROUTE_PATH.CLOUD_ASSESMENT_REPORT, component: CloudAssesmentReportComponent },
    //         { path: ROUTE_PATH.DATA_SECURITY, component: DataSecurityComponent },
    //         { path: ROUTE_PATH.TYPE_OF_CLOUD_SERVICE, component: TypeOfCloudServiceComponent },
    //         { path: ROUTE_PATH.ABOUT_THE_PRODUCT, component: AboutTheProductComponent },
    //     ]
    // },
    {
        path: '',
        redirectTo: ROUTE_PATH.HOME,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: ROUTE_PATH.HOME,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
