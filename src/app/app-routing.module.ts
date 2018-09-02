import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CONFIG_DATA } from './data/ConfigData';
// pages
import { HomeComponent } from './layouts/home/home.component';
import { AccessmentComponent } from './layouts/accessment/accessment.component';
import { AboutComponent } from './layouts/about/about.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { QuestionsComponent } from './layouts/questions/questions.component';
import { ResultComponent } from './layouts/result/result.component';

const routes: Routes = [
    { path: CONFIG_DATA.ROUTE_PATH.HOME, component: HomeComponent },
    { path: CONFIG_DATA.ROUTE_PATH.ABOUT, component: AboutComponent },
    { path: CONFIG_DATA.ROUTE_PATH.CONTACT, component: ContactComponent },
    { path: CONFIG_DATA.ROUTE_PATH.ACCESSMENT, component: AccessmentComponent },
    { path: CONFIG_DATA.ROUTE_PATH.QUESTIONS, component: QuestionsComponent },
    { path: CONFIG_DATA.ROUTE_PATH.RESULT, component: ResultComponent },
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
        redirectTo: CONFIG_DATA.ROUTE_PATH.HOME,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: CONFIG_DATA.ROUTE_PATH.HOME,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
