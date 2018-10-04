import { RoutePath } from './route-path';
import { QuestionData } from './question-data';
import { QuestionDataDev } from './question-data-dev';
import { environment } from '../../environments/environment';

export const Config = {
    RoutePath: RoutePath,
    QuestionData: environment.production ? QuestionData : QuestionDataDev,
    reCAPTCHA: {
        enable: environment.production,
        siteKey: '6Lcza3MUAAAAACoIfqL65tFs6wxQKCI3HRAwuhv9',
    },
    LocalStorageKey: 'CloudAssessment',
    QuestionType: {
        Integer: 'Integer',
        OR: 'OR',
        XOR: 'XOR'
    },
    QuestionExtraOptions: {
        NA: 'Not applicable',
        Unsure: 'Unsure'
    },
    QuestionResultSymbol: {
        Red: 'red',
        Orange: 'orange',
        Green: 'green'
    },
    ApiUrl: 'https://submit.apps.y.cld.gov.au'
};
