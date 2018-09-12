import { RoutePath } from './route-path';
import { QuestionData } from './question-data';
import { QuestionDataDev } from './question-data-dev';

export const Config = {
    RoutePath: RoutePath,
    QuestionData: QuestionData,
    reCAPTCHA: {
        enable: false,
        siteKey: '6LdUXm8UAAAAAFjbuj5c2QR38sIUG1PljyA4Yh7u',
    },
    LocalStorageKey: 'CloudAssessment',
    ConditionalQuestions: [
        {
            IndexInQuestionData: 0,
            Condition: [
                { Value: 'Iaas', IndexesInQuestionData: [1] },
                { Value: 'Paas', IndexesInQuestionData: [2] },
                { Value: 'Saas', IndexesInQuestionData: [3] },
            ]
        }
    ],
    QuestionType: {
        Integer: 'Integer',
        OR: 'OR',
        XOR: 'XOR'
    },
    QuestionResultSymbol: {
        Red: 'red',
        Orange: 'orange',
        Green: 'green'
    },
    // todo
    RatingOptions: [
        { text: 'N/A', value: 0 },
        { text: '1', value: 1 },
        { text: '2', value: 2 },
        { text: '3', value: 3 },
        { text: '4', value: 4 },
        { text: '5', value: 5 },
        { text: 'Unsure', value: -1 },
    ],
};
