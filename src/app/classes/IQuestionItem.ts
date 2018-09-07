export default interface IQuestionItem {
    Category: string;
    SubCategory: string;
    Quality: string;
    Description: string;
    Reference: string;
    Condition: string;
    Relationship: string;
    ValueType: string;
    ValueOptions: string;
    RequiredValue: any;
    RequiredValueRationale: string;
    AssessmentValue: any;
    AssessmentValueRationale: string;
    Comments?: string;
    id?: number;
}
