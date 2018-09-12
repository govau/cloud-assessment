import IQuestionItem from './IQuestionItem';
import ICSVItem from "./ICSVItem";
import CheckBox from './CheckBox';

export default class QuestionItem implements IQuestionItem {
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

    constructor(data: ICSVItem) {
        this.Category = data.Category;
        this.SubCategory = data.Sub_category;
        this.Quality = data.Quality;
        this.Description = data.Description;
        this.Reference = data.Reference;
        this.Condition = data.Condition;
        this.Relationship = data.Relationship;
        this.ValueType = data.Value_type;
        this.ValueOptions = data.Value_options;
        this.RequiredValue = data.Required_or_default_value;
        this.RequiredValueRationale = data.Required_value_rationale;

        if (data.Value_type === 'OR') {
            this.AssessmentValue = [];
            data.Value_options.split(',').forEach(name =>
                this.AssessmentValue.push(new CheckBox(name, false))
            );
        } else {
            this.AssessmentValue = data.Assessment_value;
        }
        this.AssessmentValueRationale = data.Assessment_value_rationale;
    }
}