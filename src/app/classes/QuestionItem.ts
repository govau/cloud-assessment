export default interface QuestionItem {
    id: number;
    category: string;
    subCategory: string;
    quality: string;
    description: string;
    reference: string;
    condition: string;
    relationship: string;
    valueType: string;
    defaultValue: any;
    requiredValueRationale: string;
    assessmentValue: string;
    assessmentValueRationale: string;
    options?: any[];
    comments?: string;
}
