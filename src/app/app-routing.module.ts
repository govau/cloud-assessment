import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
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
    //     path: CONFIG_DATA.ROUTE_PATH.ACCESSMENT,
    //     children: [
    //         // { path: '', component: AccessmentComponent },
    //         // { path: '1', component: QuestionsComponent },
    //         // { path: '2', component: QuestionsComponent },
    //         // { path: '3', component: QuestionsComponent },
    //         // { path: '4', component: QuestionsComponent },
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

export class AppRoutingModule {
    // constructor(router: Router) {
    //     const config = router.config;
    //     const temp = config.find(x => x.path === CONFIG_DATA.ROUTE_PATH.ACCESSMENT);
    //     temp.children.push({ path: '', component: AccessmentComponent });
    //     temp.children.push({ path: '1', component: QuestionsComponent });
    //     temp.children.push({ path: '2', component: QuestionsComponent });
    //     temp.children.push({ path: '3', component: QuestionsComponent });
    //     router.resetConfig(config);
    // }
}
