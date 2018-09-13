import { RoutePath } from './route-path';
import { QuestionData } from './question-data';
import { QuestionDataDev } from './question-data-dev';
import { environment } from '../../environments/environment';

export const Config = {
    RoutePath: RoutePath,
    QuestionData: environment.production ? QuestionData : QuestionDataDev,
    reCAPTCHA: {
        enable: false,
        siteKey: '6LdUXm8UAAAAAFjbuj5c2QR38sIUG1PljyA4Yh7u',
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
    // todo
    // RatingOptions: [
    //     { text: 'N/A', value: 0 },
    //     { text: '1', value: 1 },
    //     { text: '2', value: 2 },
    //     { text: '3', value: 3 },
    //     { text: '4', value: 4 },
    //     { text: '5', value: 5 },
    //     { text: 'Unsure', value: -1 },
    // ],
    // ConditionalQuestions: [
    //     {
    //         IndexInQuestionData: 0,
    //         Condition: [
    //             { Value: 'Iaas', IndexesInQuestionData: [1] },
    //             { Value: 'Paas', IndexesInQuestionData: [2] },
    //             { Value: 'Saas', IndexesInQuestionData: [3] },
    //         ]
    //     }
    // ],
};
